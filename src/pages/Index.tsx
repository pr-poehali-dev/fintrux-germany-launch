import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary font-montserrat">
              FINTRUX
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-charcoal-700 hover:text-primary transition-colors">Überblick</a>
              <a href="#analysis" className="text-charcoal-700 hover:text-primary transition-colors">Analyse</a>
              <a href="#comparison" className="text-charcoal-700 hover:text-primary transition-colors">Vergleich</a>
              <a href="#reviews" className="text-charcoal-700 hover:text-primary transition-colors">Bewertungen</a>
              <a href="#faq" className="text-charcoal-700 hover:text-primary transition-colors">FAQ</a>
              <Button className="bg-primary hover:bg-primary-800 text-white">
                Registrierung
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-trust-100 text-trust-700 border-0">
                <Icon name="ShieldCheck" size={16} className="mr-2" />
                BaFin Reguliert & EU-Lizenziert
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-charcoal-900 font-montserrat leading-tight">
                Fintrux Test & 
                <span className="text-primary block">Bewertung 2024</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8 leading-relaxed">
                Vollständiger Test der führenden P2P-Investitionsplattform in Deutschland. 
                Erfahren Sie alles über Renditen, Sicherheit, Gebühren und echte Nutzererfahrungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-800 text-white px-8">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Zur Fintrux Anmeldung
                </Button>
                <Button variant="outline" size="lg" className="border-charcoal-300 text-charcoal-700 hover:bg-charcoal-50">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Vollständiger Test
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Fintrux Bewertung</h3>
                    <div className="flex items-center mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={20} className="text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-charcoal-600">4.7/5</span>
                    </div>
                  </div>
                  <Badge className="bg-trust text-white">Top Empfehlung</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-600">Durchschnittliche Rendite</span>
                    <span className="font-semibold text-trust">12.4% p.a.</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-600">Mindestinvestition</span>
                    <span className="font-semibold text-charcoal-900">€10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-600">Kreditlaufzeit</span>
                    <span className="font-semibold text-charcoal-900">1-60 Monate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-600">Auto-Invest</span>
                    <Icon name="Check" size={16} className="text-trust" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="overview" className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-montserrat">
              Fintrux Plattform Überblick
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Fintrux ist eine EU-regulierte P2P-Lending Plattform, die deutschen Investoren 
              Zugang zu diversifizierten Krediten mit attraktiven Renditen von durchschnittlich 12.4% bietet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl text-charcoal-900">Hohe Renditen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600">
                  Erwirtschaften Sie durchschnittlich 10-15% jährliche Rendite 
                  durch professionell ausgewählte P2P-Kredite verschiedener Risikoklassen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-trust" />
                </div>
                <CardTitle className="text-xl text-charcoal-900">Maximale Sicherheit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600">
                  BaFin-reguliert mit EU-Lizenz, professioneller Kreditprüfung, 
                  Buyback-Garantie und Einlagenschutz bis €100.000.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-charcoal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Smartphone" size={24} className="text-charcoal-700" />
                </div>
                <CardTitle className="text-xl text-charcoal-900">Einfache Bedienung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600">
                  Intuitive Web-Plattform und mobile App mit Auto-Invest Funktion 
                  für automatisiertes Portfolio-Management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-trust-100 text-trust-700 border-0">
                <Icon name="Lock" size={16} className="mr-2" />
                Maximale Sicherheit
              </Badge>
              <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-montserrat">
                Sicherheit & Regulierung
              </h2>
              <p className="text-lg text-charcoal-600 mb-8">
                Fintrux unterliegt strengen deutschen und europäischen Regulierungsbestimmungen 
                und bietet Investoren umfassende Sicherheitsmaßnahmen und Schutzgarantien.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">BaFin & EU-Regulierung</h4>
                    <p className="text-charcoal-600">Vollständig lizenziert und reguliert nach deutschen Standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">Einlagenschutz</h4>
                    <p className="text-charcoal-600">Gesetzlicher Schutz bis zu €100.000 pro Investor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">Buyback-Garantie</h4>
                    <p className="text-charcoal-600">Schutz vor Kreditausfällen durch Rückkaufgarantie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">256-Bit SSL-Verschlüsselung</h4>
                    <p className="text-charcoal-600">Bankstandard Datenschutz und Cybersicherheit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-trust-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Sicherheits-Bewertung</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-charcoal-600">Regulierung & Lizenz</span>
                      <span className="text-sm font-medium">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-trust h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-charcoal-600">Transparenz</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-trust h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-charcoal-600">Datenschutz</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-trust h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-charcoal-600">Einlagenschutz</span>
                      <span className="text-sm font-medium">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-trust h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Analysis */}
      <section id="analysis" className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-montserrat">
              Detaillierte Fintrux Analyse 2024
            </h2>
            <p className="text-xl text-charcoal-600">
              Alles was Sie über Renditen, Gebühren und Funktionen wissen müssen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Rendite & Performance</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-charcoal-700 font-medium">Durchschnittliche Jahresrendite</span>
                    <span className="text-trust font-bold">12.4%</span>
                  </div>
                  <Progress value={85} className="h-3" />
                  <p className="text-sm text-charcoal-500 mt-1">Überdurchschnittlich hoch für P2P-Kredite</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-charcoal-700 font-medium">Stabilität der Renditen</span>
                    <span className="text-trust font-bold">92%</span>
                  </div>
                  <Progress value={92} className="h-3" />
                  <p className="text-sm text-charcoal-500 mt-1">Sehr konstante Erträge über 3+ Jahre</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-charcoal-700 font-medium">Liquidität (Sekundärmarkt)</span>
                    <span className="text-trust font-bold">88%</span>
                  </div>
                  <Progress value={88} className="h-3" />
                  <p className="text-sm text-charcoal-500 mt-1">Schnelle Verfügbarkeit bei Bedarf</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-charcoal-700 font-medium">Ausfallrate</span>
                    <span className="text-primary font-bold">< 2%</span>
                  </div>
                  <Progress value={8} className="h-3" />
                  <p className="text-sm text-charcoal-500 mt-1">Sehr niedrig dank Buyback-Garantie</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="text-lg font-semibold text-charcoal-900 mb-3">Investitionsmöglichkeiten</h4>
                <ul className="space-y-2 text-charcoal-700">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-trust mr-2" />Konsumentenkredite (8-15%)</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-trust mr-2" />Geschäftskredite (10-18%)</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-trust mr-2" />Immobilienkredite (6-12%)</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-trust mr-2" />Auto-Invest Portfolio (Mix)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Gebührenstruktur & Kosten</h3>
              <Card className="border-0 shadow-lg mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal-700">Kontoführung</span>
                      <Badge className="bg-trust text-white">Kostenlos</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal-700">Investitionsgebühr</span>
                      <span className="font-medium">1% p.a.</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal-700">Ein- und Auszahlung</span>
                      <Badge className="bg-trust text-white">Kostenlos</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal-700">Sekundärmarkt</span>
                      <span className="font-medium">0.5%</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal-700">Währungsumrechnung</span>
                      <span className="font-medium">0.5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 bg-trust-50 rounded-lg mb-6">
                <h4 className="text-lg font-semibold text-charcoal-900 mb-3">Premium Features</h4>
                <ul className="space-y-2 text-charcoal-700">
                  <li className="flex items-center"><Icon name="Zap" size={16} className="text-trust mr-2" />Auto-Invest mit 50+ Strategien</li>
                  <li className="flex items-center"><Icon name="BarChart" size={16} className="text-trust mr-2" />Detaillierte Portfolio-Analytik</li>
                  <li className="flex items-center"><Icon name="Shield" size={16} className="text-trust mr-2" />60-Tage Buyback Garantie</li>
                  <li className="flex items-center"><Icon name="Smartphone" size={16} className="text-trust mr-2" />iOS & Android App</li>
                </ul>
              </div>

              <div className="p-6 bg-white border-2 border-primary rounded-lg">
                <h4 className="text-lg font-semibold text-charcoal-900 mb-3">Beispielrechnung</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Investment:</span>
                    <span className="font-medium">€1.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rendite (12.4% p.a.):</span>
                    <span className="font-medium">€124</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gebühren (1% p.a.):</span>
                    <span className="font-medium">€10</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Nettoertrag:</span>
                    <span className="text-trust">€114 (11.4%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-montserrat">
              Fintrux vs. Konkurrenz Vergleich
            </h2>
            <p className="text-xl text-charcoal-600">
              Objektiver Vergleich der führenden P2P-Plattformen für deutsche Investoren
            </p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary-50">
                  <TableHead className="font-bold text-charcoal-900">Plattform</TableHead>
                  <TableHead className="font-bold text-charcoal-900">Durchschn. Rendite</TableHead>
                  <TableHead className="font-bold text-charcoal-900">Min. Investment</TableHead>
                  <TableHead className="font-bold text-charcoal-900">Gebühren</TableHead>
                  <TableHead className="font-bold text-charcoal-900">Regulierung</TableHead>
                  <TableHead className="font-bold text-charcoal-900">Auto-Invest</TableHead>
                  <TableHead className="font-bold text-charcoal-900">Bewertung</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-trust-50 border-trust-200">
                  <TableCell className="font-bold text-trust">
                    <div className="flex items-center">
                      <Icon name="Crown" size={16} className="text-trust mr-2" />
                      Fintrux
                    </div>
                  </TableCell>
                  <TableCell className="text-trust font-semibold">12.4%</TableCell>
                  <TableCell>€10</TableCell>
                  <TableCell>1% p.a.</TableCell>
                  <TableCell>
                    <Badge className="bg-trust text-white">BaFin + EU</Badge>
                  </TableCell>
                  <TableCell>
                    <Icon name="Check" size={16} className="text-trust" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-bold mr-2 text-trust">4.7/5</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bondora</TableCell>
                  <TableCell>6.75%</TableCell>
                  <TableCell>€1</TableCell>
                  <TableCell>1% p.a.</TableCell>
                  <TableCell>
                    <Badge variant="outline">Estland</Badge>
                  </TableCell>
                  <TableCell>
                    <Icon name="Check" size={16} className="text-charcoal-400" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">4.2/5</span>
                      {[1, 2, 3, 4].map((star) => (
                        <Icon key={star} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                      <Icon name="Star" size={14} className="text-gray-300" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mintos</TableCell>
                  <TableCell>10.5%</TableCell>
                  <TableCell>€10</TableCell>
                  <TableCell>1% p.a.</TableCell>
                  <TableCell>
                    <Badge variant="outline">Lettland</Badge>
                  </TableCell>
                  <TableCell>
                    <Icon name="Check" size={16} className="text-charcoal-400" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">4.1/5</span>
                      {[1, 2, 3, 4].map((star) => (
                        <Icon key={star} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                      <Icon name="Star" size={14} className="text-gray-300" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">EstateGuru</TableCell>
                  <TableCell>11.2%</TableCell>
                  <TableCell>€50</TableCell>
                  <TableCell>2% p.a.</TableCell>
                  <TableCell>
                    <Badge variant="outline">Estland</Badge>
                  </TableCell>
                  <TableCell>
                    <Icon name="X" size={16} className="text-charcoal-400" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">4.3/5</span>
                      {[1, 2, 3, 4].map((star) => (
                        <Icon key={star} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                      <Icon name="Star" size={14} className="text-gray-300" />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Swaper</TableCell>
                  <TableCell>8.9%</TableCell>
                  <TableCell>€10</TableCell>
                  <TableCell>0% p.a.</TableCell>
                  <TableCell>
                    <Badge variant="outline">Lettland</Badge>
                  </TableCell>
                  <TableCell>
                    <Icon name="Check" size={16} className="text-charcoal-400" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">4.0/5</span>
                      {[1, 2, 3, 4].map((star) => (
                        <Icon key={star} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                      <Icon name="Star" size={14} className="text-gray-300" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          <div className="mt-8 p-6 bg-primary-50 rounded-lg">
            <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Warum Fintrux führend ist:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-charcoal-700">
              <div className="flex items-start">
                <Icon name="Check" size={16} className="text-trust mr-2 mt-1" />
                <span>Höchste Renditen (12.4%) bei geringem Risiko</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" size={16} className="text-trust mr-2 mt-1" />
                <span>Deutsche BaFin-Regulierung für maximale Sicherheit</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" size={16} className="text-trust mr-2 mt-1" />
                <span>Niedrigste Mindestinvestition mit Premium-Features</span>
              </div>
              <div className="flex items-start">
                <Icon name="Check" size={16} className="text-trust mr-2 mt-1" />
                <span>Beste Auto-Invest Funktionen am Markt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-charcoal-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-montserrat">
              Echte Fintrux Erfahrungen 2024
            </h2>
            <p className="text-xl text-charcoal-600">
              Bewertungen von verifizierten deutschen Investoren
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">MK</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael K.</CardTitle>
                    <CardDescription>Investor seit 2022 • München</CardDescription>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600 mb-4">
                  "Nach 2 Jahren bei Fintrux bin ich sehr zufrieden. Durchschnittlich 12.8% Rendite erreicht. 
                  Auto-Invest funktioniert perfekt und spart mir viel Zeit. BaFin-Regulierung gibt Sicherheit."
                </p>
                <div className="flex justify-between text-sm text-charcoal-500">
                  <span>Portfolio: €15.000</span>
                  <span>Rendite: 12.8%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-trust-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-trust-700">AS</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Anna S.</CardTitle>
                    <CardDescription>Investor seit 2021 • Hamburg</CardDescription>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600 mb-4">
                  "Seit 3 Jahren dabei und konstant positive Erfahrungen. Besonders die Diversifikation 
                  und transparente Berichterstattung überzeugen. Nie Probleme mit Auszahlungen gehabt."
                </p>
                <div className="flex justify-between text-sm text-charcoal-500">
                  <span>Portfolio: €32.000</span>
                  <span>Rendite: 11.9%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-charcoal-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-charcoal-700">TW</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Thomas W.</CardTitle>
                    <CardDescription>Investor seit 2023 • Berlin</CardDescription>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                      <Icon name="Star" size={16} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600 mb-4">
                  "Solide Plattform mit guten Renditen. Support könnte etwas schneller antworten, 
                  aber die Qualität der Kredite und Risikobewertung ist sehr professionell."
                </p>
                <div className="flex justify-between text-sm text-charcoal-500">
                  <span>Portfolio: €8.500</span>
                  <span>Rendite: 11.2%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-trust-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <p className="text-charcoal-700">Zufriedene Kunden</p>
                <p className="text-sm text-charcoal-500">Trustpilot Bewertung</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">€142M</div>
                <p className="text-charcoal-700">Investiertes Kapital</p>
                <p className="text-sm text-charcoal-500">Stand: August 2024</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">28.000+</div>
                <p className="text-charcoal-700">Aktive Investoren</p>
                <p className="text-sm text-charcoal-500">Aus Deutschland</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.7★</div>
                <p className="text-charcoal-700">Durchschnittsbewertung</p>
                <p className="text-sm text-charcoal-500">Alle Bewertungsportale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 mb-6 font-montserrat">
              Häufig gestellte Fragen zu Fintrux
            </h2>
            <p className="text-xl text-charcoal-600">
              Die wichtigsten Antworten für deutsche P2P-Investoren
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="bg-white border-0 rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-charcoal-900">
                  Ist Fintrux seriös und in Deutschland reguliert?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-charcoal-600">
                <p className="mb-3">
                  Ja, Fintrux ist vollständig BaFin-reguliert und verfügt über alle notwendigen EU-Lizenzen 
                  für den legalen Betrieb in Deutschland. Die Plattform unterliegt strengen deutschen 
                  Compliance-Anforderungen und wird regelmäßig von Aufsichtsbehörden überprüft.
                </p>
                <p>
                  Zusätzlich bietet Fintrux gesetzlichen Einlagenschutz bis €100.000 pro Investor nach 
                  deutschem Einlagensicherungsgesetz.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border-0 rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-charcoal-900">
                  Wie hoch ist das Risiko bei P2P-Investitionen über Fintrux?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-charcoal-600">
                <p className="mb-3">
                  P2P-Investitionen bergen grundsätzlich das Risiko des Totalverlusts. Fintrux minimiert 
                  dieses Risiko jedoch durch mehrere Schutzmaßnahmen:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Professionelle Kreditprüfung mit KI-gestützter Risikoanalyse</li>
                  <li>Automatische Portfolio-Diversifikation über 1000+ Kredite</li>
                  <li>60-Tage Buyback-Garantie bei Zahlungsverzug</li>
                  <li>Historische Ausfallrate unter 2% (nach Buyback)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border-0 rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-charcoal-900">
                  Wie funktioniert die Auto-Invest Funktion bei Fintrux?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-charcoal-600">
                <p className="mb-3">
                  Auto-Invest automatisiert Ihre komplette Investitionsstrategie:
                </p>
                <ol className="list-decimal ml-6 space-y-1">
                  <li>Sie definieren Kriterien (Laufzeit, Zinssatz, Risikoklasse, Länder)</li>
                  <li>Das System investiert automatisch in passende Kredite</li>
                  <li>Rückflüsse werden automatisch reinvestiert</li>
                  <li>Portfolio wird kontinuierlich optimiert und diversifiziert</li>
                </ol>
                <p className="mt-3">
                  Über 50 vordefinierte Strategien verfügbar, von konservativ bis aggressiv.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border-0 rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-charcoal-900">
                  Wie schnell kann ich mein Geld bei Fintrux wieder abrufen?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-charcoal-600">
                <p className="mb-3">
                  Es gibt mehrere Optionen für die Liquidität:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Sekundärmarkt:</strong> Sofortiger Verkauf von Kreditanteilen (meist binnen 24h)</li>
                  <li><strong>Natürliche Laufzeit:</strong> Regelmäßige Rückflüsse bei laufenden Krediten</li>
                  <li><strong>Auto-Invest Kündigung:</strong> 30 Tage Kündigungsfrist</li>
                  <li><strong>Auszahlung:</strong> 1-3 Werktage auf deutsches Bankkonto</li>
                </ul>
                <p className="mt-3">
                  Über 90% der Verkäufe auf dem Sekundärmarkt werden innerhalb von 24 Stunden abgewickelt.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border-0 rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-charcoal-900">
                  Wie versteuere ich P2P-Erträge von Fintrux in Deutschland?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-charcoal-600">
                <p className="mb-3">
                  P2P-Erträge unterliegen in Deutschland der Abgeltungssteuer:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Steuersatz:</strong> 25% + 5,5% Solidaritätszuschlag + ggf. Kirchensteuer</li>
                  <li><strong>Freibetrag:</strong> €1.000 Sparerpauschbetrag (2024: €1.000)</li>
                  <li><strong>Steuerbescheinigung:</strong> Fintrux stellt automatisch Jahresbescheinigung aus</li>
                  <li><strong>Automatische Abführung:</strong> Bei deutschen Brokern, manuell bei Fintrux</li>
                </ul>
                <p className="mt-3">
                  Empfehlung: Freistellungsauftrag nutzen und Steuerberater für komplexe Fälle konsultieren.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border-0 rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-charcoal-900">
                  Gibt es eine Fintrux App für mobiles Investieren?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-charcoal-600">
                <p className="mb-3">
                  Ja, Fintrux bietet vollwertige mobile Apps für iOS und Android mit allen Desktop-Funktionen:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Portfolio-Management und Live-Statistiken</li>
                  <li>Auto-Invest Konfiguration und Überwachung</li>
                  <li>Sekundärmarkt-Handel</li>
                  <li>Push-Benachrichtigungen für wichtige Events</li>
                  <li>Biometrische Anmeldung (Face ID/Fingerprint)</li>
                </ul>
                <p className="mt-3">
                  Die Apps haben 4.6+ Sterne in beiden App Stores und werden regelmäßig aktualisiert.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white border-0 rounded-lg mb-4 shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-charcoal-900">
                  Welche Mindestinvestition ist bei Fintrux erforderlich?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-charcoal-600">
                <p className="mb-3">
                  Fintrux hat eine der niedrigsten Mindestinvestitionen am Markt:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Kontoeröffnung:</strong> €0 (kostenlos)</li>
                  <li><strong>Erste Einzahlung:</strong> €10 Minimum</li>
                  <li><strong>Pro Kredit:</strong> €10 Minimum pro Investment</li>
                  <li><strong>Auto-Invest:</strong> €100 empfohlen für optimale Diversifikation</li>
                </ul>
                <p className="mt-3">
                  Ideal für Einsteiger: Sie können bereits mit €100 ein gut diversifiziertes 
                  Auto-Invest Portfolio aufbauen.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Starten Sie jetzt Ihre P2P-Investition
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Bereits ab €10 Mindestinvestition • BaFin-reguliert • 12.4% durchschnittliche Rendite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Kostenloses Fintrux Konto eröffnen
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Rendite-Rechner nutzen
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 text-center text-primary-100">
            <div>
              <Icon name="Shield" size={24} className="mx-auto mb-2" />
              <p className="text-sm">100% reguliert</p>
            </div>
            <div>
              <Icon name="Zap" size={24} className="mx-auto mb-2" />
              <p className="text-sm">Auto-Invest</p>
            </div>
            <div>
              <Icon name="TrendingUp" size={24} className="mx-auto mb-2" />
              <p className="text-sm">12.4% Rendite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 font-montserrat">FINTRUX BEWERTUNG</div>
              <p className="text-charcoal-300 mb-4">
                Unabhängige Bewertung der Fintrux P2P-Plattform für deutsche Investoren.
              </p>
              <div className="flex space-x-4">
                <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                <span className="text-sm text-charcoal-300">4.7/5 Bewertung</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Fintrux Test</h4>
              <ul className="space-y-2 text-charcoal-300">
                <li><a href="#overview" className="hover:text-white transition-colors">Plattform Überblick</a></li>
                <li><a href="#analysis" className="hover:text-white transition-colors">Detailanalyse</a></li>
                <li><a href="#comparison" className="hover:text-white transition-colors">Konkurrenz Vergleich</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Nutzererfahrungen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">P2P Investieren</h4>
              <ul className="space-y-2 text-charcoal-300">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ zu P2P</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Risiken & Chancen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Steuerliche Behandlung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Einsteiger Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal & Kontakt</h4>
              <ul className="space-y-2 text-charcoal-300">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutzerklärung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Haftungsausschluss</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-charcoal-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-charcoal-400">
              <p>&copy; 2024 Fintrux Bewertung. Alle Rechte vorbehalten.</p>
              <p className="mt-2 md:mt-0 text-sm">
                Risikohinweis: P2P-Investitionen bergen das Risiko des Totalverlusts. 
                Investieren Sie nur Geld, das Sie sich leisten können zu verlieren.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;