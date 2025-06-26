import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { 
  Car, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Users, 
  Trophy,
  Menu,
  X,
  MessageCircle,
  Send,
  Instagram,
  Quote,
  Timer,
  User,
  GraduationCap,
  Award,
  BookOpen
} from 'lucide-react'
import redSportsCar from './assets/red-sports-car.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [showScrollPopup, setShowScrollPopup] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45
  })

    // Функции для открытия мессенджеров с данными Zholaman
  const openWhatsApp = () => {
    window.open('https://wa.me/77011117856?text=Здравствуйте! Хочу записаться на курсы вождения в автошколу Zholaman', '_blank')
  }

  const openTelegram = () => {
    window.open('https://t.me/zhol_aman_kz', '_blank')
  }

  const openInstagram = () => {
    window.open('https://instagram.com/zhol_aman_kz', '_blank')
  }

  // Плавная прокрутка к секциям
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Exit Intent popup
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  // Scroll popup
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 50 && !showScrollPopup) {
        setShowScrollPopup(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showScrollPopup])

  // Таймер обратного отсчета
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header - точная копия autoschoolkausar.kz */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">АВТОШКОЛА</h1>
                <p className="text-sm text-blue-600 font-semibold">ZHOLAMAN</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('contacts')} className="text-gray-600 hover:text-blue-600 transition-colors">КОНТАКТЫ</button>
              <button onClick={() => scrollToSection('autodrom')} className="text-gray-600 hover:text-blue-600 transition-colors">АВТОДРОМ</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">О НАС</button>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">РУС</span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-blue-600 font-semibold">ҚАЗ</span>
              </div>
            </nav>

            {/* Contact Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={openWhatsApp}>
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={openTelegram}>
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={openWhatsApp}>
                ЗАПИСАТЬСЯ
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 mt-4">
                <button onClick={() => scrollToSection('contacts')} className="text-left text-gray-600 hover:text-blue-600">КОНТАКТЫ</button>
                <button onClick={() => scrollToSection('autodrom')} className="text-left text-gray-600 hover:text-blue-600">АВТОДРОМ</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-blue-600">О НАС</button>
                <div className="flex space-x-2">
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex-1" onClick={openWhatsApp}>
                    WhatsApp
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1" onClick={openTelegram}>
                    Telegram
                  </Button>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full" onClick={openWhatsApp}>
                  ЗАПИСАТЬСЯ
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - с реальным изображением красной спортивной машины */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden">
        {/* Background with real red sports car image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${redSportsCar})`,
            backgroundPosition: 'center right'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              АВТОШКОЛА ZHOLAMAN
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Обучение ПДД в Алматы
            </p>

            <div className="mb-12">
              <p className="text-lg md:text-xl text-gray-300 mb-2">
                Станьте водителем уже через 3 месяца — начните прямо сейчас
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                Учим безопасному вождению так, чтобы вы чувствовали себя уверенно на любой дороге
              </p>
            </div>

            {/* CTA Buttons - точно как в оригинале */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-4 text-lg rounded-none transform skew-x-[-10deg] shadow-xl"
                onClick={openWhatsApp}
              >
                <span className="transform skew-x-[10deg]">ЗАПИСАТЬСЯ</span>
              </Button>
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 text-lg rounded-none transform skew-x-[10deg] shadow-xl"
                onClick={() => scrollToSection('about')}
              >
                <span className="transform skew-x-[-10deg]">УЗНАТЬ БОЛЬШЕ</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-500 mr-2" />
                <span className="text-4xl font-bold text-gray-900">4.9</span>
              </div>
              <p className="text-lg text-gray-600">рейтинг на 2ГИС</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">1000+</span>
              </div>
              <p className="text-lg text-gray-600">выпускников</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-green-600 mr-2" />
                <span className="text-4xl font-bold text-gray-900">95%</span>
              </div>
              <p className="text-lg text-gray-600">сдача с первого раза</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - с красными галочками как в оригинале */}
      <section id="about" className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background car image */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10">
          <Car className="w-96 h-96 text-blue-600" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Почему выбирают нас?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">Индивидуальное вождение без «подсадки» чужих учеников во время ваших занятий</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">Новые седаны и хэтчбеки с двумя педалями для комфортного обучения</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">Онлайн + оффлайн занятия — гибкий формат обучения для вашего удобства</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">Женский инструктор и отдельные группы для женщин</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">Поддержка до экзамена — пробные тесты ПДД онлайн для лучшей подготовки</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700">Преподаватель Назым — магистр «Транспорт и транспортные технологии», 12 лет стажа</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Instructor Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">О нашем преподавателе</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-blue-50 p-8 rounded-lg">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Назым</h3>
                    <p className="text-blue-600 font-semibold">Главный преподаватель</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <GraduationCap className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Магистр «Транспорт и транспортные технологии»</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">12 лет стажа обучения водителей</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">1000+ успешных выпускников</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <blockquote className="text-xl text-gray-700 italic mb-6">
                  "Учить безопасному вождению так, чтобы выпускники чувствовали себя уверенно на любой дороге"
                </blockquote>
                <p className="text-gray-600 mb-6">
                  Наша цель — не просто научить вас сдать экзамен, а подготовить к реальным условиям дорожного движения. 
                  Каждый урок направлен на формирование навыков безопасного и уверенного вождения.
                </p>
                <div className="bg-orange-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Индивидуальный подход</h4>
                  <p className="text-gray-700">
                    Мы учитываем особенности каждого ученика и адаптируем программу обучения под ваши потребности и темп освоения материала.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600">Полный спектр услуг для получения водительских прав</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Онлайн + оффлайн занятия</h3>
              <p className="text-gray-600">
                Гибкий формат обучения для вашего удобства. Изучайте теорию онлайн и практикуйтесь оффлайн.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Индивидуальное вождение</h3>
              <p className="text-gray-600">
                Персональные уроки с опытными инструкторами без «подсадки» других учеников.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Женские группы</h3>
              <p className="text-gray-600">
                Женский инструктор и отдельные группы обучения специально для женщин.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - точная копия тарифов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Тарифы обучения</h2>
            <p className="text-gray-600">Выберите подходящий для вас пакет обучения</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* СТАНДАРТ */}
            <Card className="relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">СТАНДАРТ</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">65 000₸</div>
                  <div className="text-lg text-gray-600 mb-2">+ 35 000₸ (вождение)</div>
                  <p className="text-gray-600">Базовый курс</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Теория: 3 раза в неделю, 1 месяц</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Практика вождения: 10 академ. часов</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>5 уроков по 1,5 часа</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Сертификат</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Домашние задания</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" onClick={openWhatsApp}>
                  ВЫБРАТЬ КУРС
                </Button>
              </CardContent>
            </Card>

            {/* ВЫГОДНЫЙ - популярный */}
            <Card className="relative border-2 border-orange-600">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  ПОПУЛЯРНЫЙ
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">ВЫГОДНЫЙ</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">160 000₸</div>
                  <p className="text-gray-600">Оптимальный курс</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Теория: 3 раза в неделю, 1 месяц</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Практика вождения: 16 академ. часов</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>8 уроков по 1,5 часа</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Сертификат + PDD.test</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Мед.справка + вход на автодром</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Рассрочка 0%</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700" onClick={openWhatsApp}>
                  ВЫБРАТЬ КУРС
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как проходит обучение</h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Консультация</h3>
              <p className="text-sm text-gray-600">Подбираем оптимальную программу под ваши потребности</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Теория</h3>
              <p className="text-sm text-gray-600">Изучаем ПДД и основы безопасного вождения в классе или онлайн</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Внутренний экзамен</h3>
              <p className="text-sm text-gray-600">Проверяем готовность к официальному тестированию ПДД</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Индивидуальное вождение</h3>
              <p className="text-sm text-gray-600">Практика по городским маршрутам Алматы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Получение прав</h3>
              <p className="text-sm text-gray-600">Сдача в НАО «E-Gov» и оформление водительского удостоверения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Нас выбирают</h2>
          <p className="text-xl text-gray-600 mb-8">
            Более 1000 довольных выпускников уже получили права в нашей автошколе
          </p>
          <Button variant="outline" className="text-blue-600 bg-white hover:bg-gray-100" onClick={openInstagram}>
            <Instagram className="w-5 h-5 mr-2" />
            @zhol_aman_kz
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-xl mb-8 opacity-90">Запишитесь на курсы прямо сейчас!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8" onClick={openWhatsApp}>
              ЗАПИСАТЬСЯ НА КУРС
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8" onClick={openTelegram}>
              ЗАДАТЬ ВОПРОС
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">АВТОШКОЛА КАУСАР</h3>
                </div>
              </div>
              <p className="text-gray-400">Ваш надежный путь к безопасному вождению</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+7 (707) 777-77-77</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>г. Алматы, ул. Абая, 150</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700" onClick={openWhatsApp}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={openTelegram}>
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Автошкола КАУСАР. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 shadow-lg animate-bounce"
          onClick={openWhatsApp}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
          onClick={openTelegram}
        >
          <Send className="w-6 h-6" />
        </Button>
      </div>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Подождите!</h3>
              <p className="text-gray-600 mb-6">
                Не упустите возможность получить права в лучшей автошколе Алматы!
              </p>
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 flex-1" onClick={openWhatsApp}>
                  ЗАПИСАТЬСЯ
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowExitPopup(false)}>
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Popup */}
      {showScrollPopup && (
        <div className="fixed bottom-20 right-6 bg-white rounded-lg shadow-xl p-6 max-w-sm z-40 border">
          <button 
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowScrollPopup(false)}
          >
            <X className="w-4 h-4" />
          </button>
          <div className="text-center">
            <h4 className="font-bold text-gray-900 mb-2">Остались вопросы?</h4>
            <p className="text-sm text-gray-600 mb-4">Напишите нам в мессенджер</p>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 flex-1" onClick={openWhatsApp}>
                WhatsApp
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-1" onClick={openTelegram}>
                Telegram
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

