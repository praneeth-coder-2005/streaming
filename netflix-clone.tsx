import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Search, ChevronDown, Play, Info, Menu, VolumeX, Volume2 } from 'lucide-react'

export default function NetflixClone() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hoveredItem, setHoveredItem] = useState(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const continueWatching = [
    { id: 1, title: "Stranger Things", progress: 45, image: "/placeholder.svg?height=200&width=300&text=Stranger+Things" },
    { id: 2, title: "The Crown", progress: 80, image: "/placeholder.svg?height=200&width=300&text=The+Crown" },
    { id: 3, title: "Bridgerton", progress: 20, image: "/placeholder.svg?height=200&width=300&text=Bridgerton" },
  ]

  const top10 = [
    { id: 1, title: "Wednesday", image: "/placeholder.svg?height=200&width=300&text=Wednesday" },
    { id: 2, title: "Queen Charlotte", image: "/placeholder.svg?height=200&width=300&text=Queen+Charlotte" },
    { id: 3, title: "The Night Agent", image: "/placeholder.svg?height=200&width=300&text=The+Night+Agent" },
  ]

  const newAndPopular = [
    { id: 1, title: "Squid Game", releaseDate: "New", image: "/placeholder.svg?height=200&width=300&text=Squid+Game" },
    { id: 2, title: "The Witcher", comingSoon: "Friday", image: "/placeholder.svg?height=200&width=300&text=The+Witcher" },
    { id: 3, title: "Extraction 2", trending: true, image: "/placeholder.svg?height=200&width=300&text=Extraction+2" },
  ]

  const netflixOriginals = [
    { id: 1, title: "Stranger Things", image: "/placeholder.svg?height=400&width=300&text=Stranger+Things" },
    { id: 2, title: "The Crown", image: "/placeholder.svg?height=400&width=300&text=The+Crown" },
    { id: 3, title: "Bridgerton", image: "/placeholder.svg?height=400&width=300&text=Bridgerton" },
  ]

  const NavLinks = () => (
    <>
      <a href="#" className="block py-2 hover:text-gray-300">Home</a>
      <a href="#" className="block py-2 hover:text-gray-300">TV Shows</a>
      <a href="#" className="block py-2 hover:text-gray-300">Movies</a>
      <a href="#" className="block py-2 hover:text-gray-300">New & Popular</a>
      <a href="#" className="block py-2 hover:text-gray-300">My List</a>
      <a href="#" className="block py-2 hover:text-gray-300">Browse by Languages</a>
    </>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg viewBox="0 0 111 30" className="w-24 h-8 text-red-600 fill-current">
              <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 
