"use client"

import { Shield, Check, Users, User, Calendar, Euro, ArrowLeft, ArrowRight, Star, MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

// SVG Logo Component for Soleil Sérénité
const SoleilSereniteLogoSVG = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <svg viewBox="0 0 200 60" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Sun rays */}
    <g stroke="#F59E0B" strokeWidth="2" fill="none">
      <line x1="25" y1="10" x2="25" y2="15" />
      <line x1="35" y1="12" x2="33" y2="17" />
      <line x1="15" y1="12" x2="17" y2="17" />
      <line x1="42" y1="20" x2="37" y2="22" />
      <line x1="8" y1="20" x2="13" y2="22" />
      <line x1="42" y1="35" x2="37" y2="33" />
      <line x1="8" y1="35" x2="13" y2="33" />
      <line x1="35" y1="43" x2="33" y2="38" />
      <line x1="15" y1="43" x2="17" y2="38" />
      <line x1="25" y1="45" x2="25" y2="40" />
    </g>
    {/* Sun circle */}
    <circle cx="25" cy="27.5" r="12" fill="#F59E0B" />
    <circle cx="25" cy="27.5" r="8" fill="#FCD34D" />
    {/* Text */}
    <text x="50" y="25" fill="#EA580C" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">
      SOLEIL
    </text>
    <text x="50" y="42" fill="#EA580C" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">
      SÉRÉNITÉ
    </text>
    <text x="50" y="52" fill="#F59E0B" fontSize="8" fontFamily="Arial, sans-serif">
      Assurance Obsèques
    </text>
  </svg>
)

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    target: '',
    startDate: '',
    capital: '',
    customCapital: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    postalCode: '',
    consent: false
  })

  const handleTargetChange = (target: string) => {
    setFormData(prev => ({ ...prev, target }))
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.target !== ''
      case 2: return formData.startDate !== ''
      case 3: return formData.capital !== '' || formData.customCapital !== ''
      case 4: return formData.firstName && formData.lastName && formData.phone && formData.email && formData.postalCode && formData.consent
      default: return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Votre demande a été transmise ! Notre équipe vous contactera dans les 24h.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <SoleilSereniteLogoSVG />
          </div>
          <div className="flex items-center space-x-2 text-orange-600">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">Plateforme sécurisée</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-300 via-orange-300 to-amber-400 px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4 leading-tight">
                  Préparez l'avenir avec confiance et sérénité
                </h1>
                <p className="text-lg text-orange-800 mb-8">
                  Offrez à vos proches la tranquillité d'esprit grâce à notre solution d'assurance funéraire personnalisée et accessible.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-orange-900 flex-shrink-0" />
                  <span className="text-orange-900 font-medium">
                    Couverture garantie pour <strong>vos dernières volontés</strong>.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-orange-900 flex-shrink-0" />
                  <span className="text-orange-900 font-medium">Primes stables et prévisibles.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-orange-900 flex-shrink-0" />
                  <span className="text-orange-900 font-medium">Désignation libre du bénéficiaire.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-orange-900 flex-shrink-0" />
                  <span className="text-orange-900 font-medium">
                    <strong>Adhésion simplifiée</strong>, aucun examen médical requis.
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-6 w-6 text-orange-900 flex-shrink-0" />
                  <span className="text-orange-900 font-medium">
                    <strong>Support familial</strong> et accompagnement personnalisé.
                  </span>
                </div>
              </div>

              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-colors shadow-lg"
              >
                Obtenir mon devis
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://img.freepik.com/premium-photo/love-hug-senior-couple-bond-house-garden-nature-park-home-backyard-trust-security-future-support-happy-smile-portrait-retirement-elderly-man-australian-woman-life-insurance_590464-89170.jpg"
                  alt="Couple de seniors heureux"
                  className="rounded-full w-80 h-80 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-8 md:px-8 -mt-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-sm text-gray-600">minutes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">gratuit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Aucune</div>
                <div className="text-sm text-gray-600">obligation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">protégé</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Form Section */}
      <section id="quote-form" className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
              Découvrez votre solution sur mesure
            </h2>
            <p className="text-gray-600">
              Complétez notre formulaire et recevez votre proposition personnalisée sous 24 heures.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 ${
                      step < currentStep ? 'bg-orange-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-600">
              Étape {currentStep} sur 4
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 1: Target Selection */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-orange-700 text-center mb-8">
                  Pour qui souhaitez-vous une protection ?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div
                    onClick={() => handleTargetChange('me')}
                    className={`p-8 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.target === 'me'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                        formData.target === 'me' ? 'bg-orange-200' : 'bg-orange-100'
                      }`}>
                        <User className="h-10 w-10 text-orange-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-orange-700">Pour moi</h4>
                    </div>
                  </div>

                  <div
                    onClick={() => handleTargetChange('spouse')}
                    className={`p-8 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.target === 'spouse'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                        formData.target === 'spouse' ? 'bg-orange-200' : 'bg-orange-100'
                      }`}>
                        <Users className="h-10 w-10 text-orange-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-orange-700">Pour mon partenaire</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Start Date */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-orange-700 text-center mb-8">
                  Date d'entrée en vigueur souhaitée :
                </h3>
                <div className="max-w-md mx-auto">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Capital Amount */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-orange-700 text-center mb-8">
                  Montant de couverture souhaité
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {['3000', '4000', '5000', '10000'].map((amount) => (
                    <div
                      key={amount}
                      onClick={() => handleInputChange('capital', amount)}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all text-center ${
                        formData.capital === amount
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        formData.capital === amount ? 'bg-orange-200' : 'bg-gray-100'
                      }`}>
                        <Euro className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="text-lg font-semibold text-orange-700">
                        {Number(amount).toLocaleString()} €
                      </div>
                    </div>
                  ))}

                  <div
                    onClick={() => handleInputChange('capital', 'custom')}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all text-center ${
                      formData.capital === 'custom'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      formData.capital === 'custom' ? 'bg-orange-200' : 'bg-gray-100'
                    }`}>
                      <Euro className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="text-lg font-semibold text-orange-700">Personnalisé</div>
                  </div>
                </div>

                {formData.capital === 'custom' && (
                  <div className="max-w-md mx-auto mt-6">
                    <input
                      type="number"
                      value={formData.customCapital}
                      onChange={(e) => handleInputChange('customCapital', e.target.value)}
                      placeholder="Montant désiré en €"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      min="1000"
                      max="50000"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Personal Information */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-orange-700 text-center mb-8">
                  Vos coordonnées personnelles
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de famille *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="max-w-md">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Code Postal *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="75001"
                    pattern="[0-9]{5}"
                  />
                </div>

                <div className="pt-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleInputChange('consent', e.target.checked)}
                      className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      J'autorise Soleil Sérénité et ses partenaires à me contacter par téléphone, e-mail, SMS ou WhatsApp pour me présenter une offre adaptée à mes besoins.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-orange-600 hover:bg-orange-50'
                }`}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Retour</span>
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex items-center space-x-2 px-8 py-4 rounded-lg transition-colors ${
                    canProceed()
                      ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span>Continuer</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className={`px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg ${
                    canProceed()
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Envoyer ma demande
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
              Témoignages de nos assurés
            </h2>
            <p className="text-gray-600">
              Découvrez l'expérience de familles qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Grâce à Soleil Sérénité, je sais que mes enfants n'auront pas à s'inquiéter des frais. Un vrai soulagement."
              </p>
              <div className="font-semibold text-orange-700">Marie D., 68 ans</div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Démarches simples, équipe à l'écoute. J'ai souscrit pour mes parents en toute confiance."
              </p>
              <div className="font-semibold text-orange-700">Pierre L., 45 ans</div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Un accompagnement bienveillant dans un moment difficile. Exactement ce que nous cherchions."
              </p>
              <div className="font-semibold text-orange-700">Famille R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                Pourquoi choisir une protection aujourd'hui ?
              </h2>
              <p className="text-gray-600 mb-4">
                En France, les coûts funéraires moyens atteignent régulièrement 3 500 €.
              </p>
              <p className="text-gray-600 mb-8">
                Notre assurance obsèques vous permet de préserver votre famille du stress financier, d'honorer vos préférences personnelles et de profiter de tarifs avantageux négociés avec notre réseau de partenaires.
              </p>
              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors shadow-lg"
              >
                Découvrir nos solutions
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="https://www.shutterstock.com/image-photo/happy-mature-older-family-couple-260nw-2014559786.jpg"
                alt="Couple senior consultant un conseiller"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-gray-600">
              Trouvez rapidement les réponses à vos interrogations
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-700 mb-3">À partir de quel âge puis-je souscrire ?</h3>
              <p className="text-gray-600">
                Vous pouvez souscrire dès 40 ans et jusqu'à 85 ans, selon votre situation personnelle.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-700 mb-3">Y a-t-il des exclusions à connaître ?</h3>
              <p className="text-gray-600">
                Les conditions sont transparentes et détaillées dans votre contrat. Nos conseillers vous expliquent tout clairement.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-700 mb-3">Puis-je modifier mon contrat après souscription ?</h3>
              <p className="text-gray-600">
                Oui, certaines modifications sont possibles. Contactez votre conseiller pour étudier les options disponibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 md:px-8 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-700 mb-4">
              Besoin d'assistance ? Nous sommes là pour vous
            </h2>
            <p className="text-gray-600">
              Notre équipe de conseillers est à votre disposition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-orange-700 mb-2">Par téléphone</h3>
              <p className="text-gray-600">0800 123 456</p>
              <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Mail className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-orange-700 mb-2">Par email</h3>
              <p className="text-gray-600">contact@soleilserenite.fr</p>
              <p className="text-sm text-gray-500">Réponse sous 24h</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MessageCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-orange-700 mb-2">Chat en ligne</h3>
              <p className="text-gray-600">Assistance immédiate</p>
              <p className="text-sm text-gray-500">Disponible 7j/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-600 px-4 py-16 md:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Obtenez votre proposition gratuite et sans engagement
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Remplissez notre formulaire et recevez votre étude personnalisée rapidement.
          </p>
          <button
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 hover:bg-yellow-600 text-orange-900 px-12 py-4 text-xl font-bold rounded-lg transition-colors shadow-lg"
          >
            Commencer maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-100 px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <SoleilSereniteLogoSVG />
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-orange-700">
              <span>© 2025 - Soleil Sérénité</span>
              <a href="#" className="hover:text-orange-800">Conditions générales</a>
              <a href="#" className="hover:text-orange-800">Confidentialité</a>
              <a href="#" className="hover:text-orange-800">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
