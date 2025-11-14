import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Filter, RefreshCw, Edit, Mail, Phone, Calendar, TrendingUp, Users, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { User, Session } from '@supabase/supabase-js';

interface Lead {
  id: string;
  created_at: string;
  company_name: string | null;
  email: string;
  phone: string | null;
  employees: number;
  monthly_costs: number;
  total_savings: number;
  savings_percentage: number;
  status: string;
  follow_up_date: string | null;
  last_contacted_at: string | null;
  notes: string | null;
  system_type: string;
}

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editStatus, setEditStatus] = useState("");
  const [editFollowUpDate, setEditFollowUpDate] = useState("");
  const [editNotes, setEditNotes] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const checkAdminRole = async (userId: string) => {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();

    if (error) {
      console.error('Error checking admin role:', error);
      return false;
    }
    
    return !!data;
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate("/auth");
        } else {
          setTimeout(() => {
            checkAdminRole(session.user.id).then(isUserAdmin => {
              setIsAdmin(isUserAdmin);
              if (!isUserAdmin) {
                toast({
                  variant: "destructive",
                  title: "Geen toegang",
                  description: "Je hebt geen admin rechten voor deze pagina",
                });
                navigate("/");
              }
            });
          }, 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate("/auth");
      } else {
        checkAdminRole(session.user.id).then(isUserAdmin => {
          setIsAdmin(isUserAdmin);
          if (isUserAdmin) {
            fetchLeads();
          } else {
            toast({
              variant: "destructive",
              title: "Geen toegang",
              description: "Je hebt geen admin rechten voor deze pagina",
            });
            navigate("/");
          }
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('calculator_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Fout",
        description: "Kon leads niet ophalen",
      });
    } else {
      setLeads(data || []);
      setFilteredLeads(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (statusFilter === "all") {
      setFilteredLeads(leads);
    } else {
      setFilteredLeads(leads.filter(lead => lead.status === statusFilter));
    }
  }, [statusFilter, leads]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  const handleUpdateLead = async () => {
    if (!selectedLead) return;

    const { error } = await supabase
      .from('calculator_submissions')
      .update({
        status: editStatus as 'new' | 'contacted' | 'qualified' | 'negotiating' | 'won' | 'lost',
        follow_up_date: editFollowUpDate || null,
        notes: editNotes,
        last_contacted_at: editStatus !== selectedLead.status ? new Date().toISOString() : selectedLead.last_contacted_at,
      })
      .eq('id', selectedLead.id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Fout",
        description: "Kon lead niet bijwerken",
      });
    } else {
      toast({
        title: "Succes",
        description: "Lead succesvol bijgewerkt",
      });
      setSelectedLead(null);
      fetchLeads();
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
      'new': 'default',
      'contacted': 'secondary',
      'qualified': 'outline',
      'negotiating': 'outline',
      'won': 'outline',
      'lost': 'destructive',
    };
    
    const labels: { [key: string]: string } = {
      'new': 'Nieuw',
      'contacted': 'Gecontacteerd',
      'qualified': 'Gekwalificeerd',
      'negotiating': 'Onderhandeling',
      'won': 'Gewonnen',
      'lost': 'Verloren',
    };

    return <Badge variant={variants[status] || 'default'}>{labels[status] || status}</Badge>;
  };

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    qualified: leads.filter(l => l.status === 'qualified').length,
    won: leads.filter(l => l.status === 'won').length,
  };

  if (isAdmin === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Laden...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Lead Management Dashboard</h1>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Uitloggen
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Eerste Admin Gebruiker Aanmaken</AlertTitle>
          <AlertDescription>
            Om de eerste admin gebruiker aan te maken, gebruik de backend database tool om een record toe te voegen aan de user_roles tabel met je user_id en role 'admin'.
          </AlertDescription>
        </Alert>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Totaal Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <p className="text-3xl font-bold">{stats.total}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Nieuw</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <p className="text-3xl font-bold">{stats.new}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Gekwalificeerd</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-green-500" />
                <p className="text-3xl font-bold">{stats.qualified}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Gewonnen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <p className="text-3xl font-bold">{stats.won}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Leads</CardTitle>
                <CardDescription>Beheer en volg al je leads</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter op status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle statussen</SelectItem>
                    <SelectItem value="new">Nieuw</SelectItem>
                    <SelectItem value="contacted">Gecontacteerd</SelectItem>
                    <SelectItem value="qualified">Gekwalificeerd</SelectItem>
                    <SelectItem value="negotiating">Onderhandeling</SelectItem>
                    <SelectItem value="won">Gewonnen</SelectItem>
                    <SelectItem value="lost">Verloren</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" onClick={fetchLeads}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Bedrijf</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Besparing</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Follow-up</TableHead>
                    <TableHead>Acties</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{lead.company_name || 'Niet opgegeven'}</p>
                          <p className="text-sm text-muted-foreground">{lead.employees} medewerkers</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3" />
                            <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                          </div>
                          {lead.phone && (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Phone className="h-3 w-3" />
                              <a href={`tel:${lead.phone}`} className="hover:underline">{lead.phone}</a>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-semibold text-green-600">€{lead.total_savings.toFixed(2)}/mnd</p>
                          <p className="text-sm text-muted-foreground">{lead.savings_percentage.toFixed(1)}%</p>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(lead.status)}</TableCell>
                      <TableCell>
                        {lead.follow_up_date && (
                          <div className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            {new Date(lead.follow_up_date).toLocaleDateString('nl-NL')}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setSelectedLead(lead);
                                setEditStatus(lead.status);
                                setEditFollowUpDate(lead.follow_up_date ? lead.follow_up_date.split('T')[0] : '');
                                setEditNotes(lead.notes || '');
                              }}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Bewerk
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Lead Bewerken</DialogTitle>
                              <DialogDescription>
                                Werk de status en details van deze lead bij
                              </DialogDescription>
                            </DialogHeader>
                            {selectedLead && (
                              <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">Bedrijf</p>
                                    <p className="font-medium">{selectedLead.company_name || 'Niet opgegeven'}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">Systeem</p>
                                    <p>{selectedLead.system_type}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <p className="text-sm">{selectedLead.email}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">Telefoon</p>
                                    <p className="text-sm">{selectedLead.phone || '-'}</p>
                                  </div>
                                </div>

                                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                                  <p className="text-sm font-medium text-muted-foreground mb-2">Besparingspotentieel</p>
                                  <div className="flex items-center gap-4">
                                    <div>
                                      <p className="text-2xl font-bold text-green-600">€{selectedLead.total_savings.toFixed(2)}</p>
                                      <p className="text-sm text-muted-foreground">per maand</p>
                                    </div>
                                    <div>
                                      <p className="text-2xl font-bold text-green-600">{selectedLead.savings_percentage.toFixed(1)}%</p>
                                      <p className="text-sm text-muted-foreground">besparing</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="status">Status</Label>
                                    <Select value={editStatus} onValueChange={setEditStatus}>
                                      <SelectTrigger id="status">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="new">Nieuw</SelectItem>
                                        <SelectItem value="contacted">Gecontacteerd</SelectItem>
                                        <SelectItem value="qualified">Gekwalificeerd</SelectItem>
                                        <SelectItem value="negotiating">Onderhandeling</SelectItem>
                                        <SelectItem value="won">Gewonnen</SelectItem>
                                        <SelectItem value="lost">Verloren</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  <div className="space-y-2">
                                    <Label htmlFor="followup">Follow-up Datum</Label>
                                    <Input
                                      id="followup"
                                      type="date"
                                      value={editFollowUpDate}
                                      onChange={(e) => setEditFollowUpDate(e.target.value)}
                                    />
                                  </div>

                                  <div className="space-y-2">
                                    <Label htmlFor="notes">Notities</Label>
                                    <Textarea
                                      id="notes"
                                      rows={4}
                                      value={editNotes}
                                      onChange={(e) => setEditNotes(e.target.value)}
                                      placeholder="Voeg notities toe over deze lead..."
                                    />
                                  </div>
                                </div>

                                <Button onClick={handleUpdateLead} className="w-full">
                                  Opslaan
                                </Button>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {filteredLeads.length === 0 && !loading && (
                <div className="text-center py-8 text-muted-foreground">
                  Geen leads gevonden
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
