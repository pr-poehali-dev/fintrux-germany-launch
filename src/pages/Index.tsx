import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
              <a href="#security" className="text-charcoal-700 hover:text-primary transition-colors">Sicherheit</a>
              <a href="#reviews" className="text-charcoal-700 hover:text-primary transition-colors">Bewertungen</a>
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
                Reguliert & Lizenziert
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-charcoal-900 font-montserrat leading-tight">
                Fintrux Plattform
                <span className="text-primary block">Bewertung 2024</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8 leading-relaxed">
                Entdecken Sie die führende P2P-Investitionsplattform in Deutschland. 
                Erfahren Sie alles über Renditen, Sicherheit und Benutzerfreundlichkeit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-800 text-white px-8">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Zur Anmeldung
                </Button>
                <Button variant="outline" size="lg" className="border-charcoal-300 text-charcoal-700 hover:bg-charcoal-50">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Vollständige Bewertung
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-900">Platform Rating</h3>
                    <div className="flex items-center mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={20} className="text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-charcoal-600">4.7/5</span>
                    </div>
                  </div>
                  <Badge className="bg-trust text-white">Empfohlen</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-600">Durchschnittliche Rendite</span>
                    <span className="font-semibold text-trust">12.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-600">Mindestinvestition</span>
                    <span className="font-semibold text-charcoal-900">€10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-600">Laufzeit</span>
                    <span className="font-semibold text-charcoal-900">1-60 Monate</span>
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
              Fintrux bietet Investoren Zugang zu diversifizierten P2P-Krediten 
              mit attraktiven Renditen und professionellem Risikomanagement.
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
                  durch diversifizierte P2P-Kredite.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-trust-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-trust" />
                </div>
                <CardTitle className="text-xl text-charcoal-900">Risikomanagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600">
                  Professionelle Kreditprüfung und Diversifikation 
                  minimieren Ihr Investitionsrisiko.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-charcoal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Smartphone" size={24} className="text-charcoal-700" />
                </div>
                <CardTitle className="text-xl text-charcoal-900">Benutzerfreundlich</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600">
                  Intuitive Plattform mit mobiler App für 
                  einfaches Portfolio-Management.
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
                Fintrux unterliegt strengen regulatorischen Anforderungen und 
                bietet Investoren höchste Sicherheitsstandards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">EU-Regulierung</h4>
                    <p className="text-charcoal-600">Vollständig lizenziert und reguliert</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">Einlagenschutz</h4>
                    <p className="text-charcoal-600">Schutz bis zu €100.000 pro Investor</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-trust rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-900">SSL-Verschlüsselung</h4>
                    <p className="text-charcoal-600">Bankstandard Datenschutz</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-trust-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Sicherheits-Score</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-charcoal-600">Regulierung</span>
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
                </div>
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
              Bewertungen & Erfahrungen
            </h2>
            <p className="text-xl text-charcoal-600">
              Was unsere Nutzer über Fintrux sagen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">MK</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael K.</CardTitle>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600">
                  "Sehr zufrieden mit der Plattform. Stabile Renditen und 
                  transparente Kommunikation. Kann ich nur empfehlen."
                </p>
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
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600">
                  "Seit 2 Jahren dabei und durchgehend positive Erfahrungen. 
                  Die Auto-Invest Funktion ist sehr praktisch."
                </p>
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
                    <div className="flex items-center">
                      {[1, 2, 3, 4].map((star) => (
                        <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                      <Icon name="Star" size={16} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-600">
                  "Gute Plattform mit soliden Renditen. Manchmal etwas langsamer 
                  Support, aber insgesamt empfehlenswert."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Bereit für Ihre erste Investition?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Starten Sie noch heute mit nur €10 Mindestinvestition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Jetzt registrieren
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="HelpCircle" size={20} className="mr-2" />
              FAQ lesen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 font-montserrat">FINTRUX</div>
              <p className="text-charcoal-300">
                Ihr vertrauensvoller Partner für P2P-Investitionen in Deutschland.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-charcoal-300">
                <li><a href="#" className="hover:text-white transition-colors">Überblick</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sicherheit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bewertungen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-charcoal-300">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hilfe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-charcoal-300">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-charcoal-700 mt-8 pt-8 text-center text-charcoal-400">
            <p>&copy; 2024 Fintrux Bewertung. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;