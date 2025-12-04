import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'

const projectData = {
  1: {
    title: "Telegram-бот Avito Parser",
    fullDesc: "Полноценный асинхронный бот, который мониторит новые объявления по 100+ запросам одновременно. Уведомления приходят за <3 секунды после публикации. Деплой на VPS + Docker Compose.",
    tech: ["Python 3.11", "aiogram 3.x", "Redis", "PostgreSQL", "Docker", "Nginx"],
    links: {
      github: "https://github.com/tvoynick/avito-bot",
      telegram: "https://t.me/tvoybot"
    },
    features: ["Мгновенные уведомления", "Фильтры по цене/району", "Анти-бан система", "Веб-панель админа"]
  },
  // Добавь остальные проекты по аналогиично
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = projectData[id] || projectData[1]

  return (
    <div className="min-h-screen bg-dark text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto"
      >
        <Link to="/" className="inline-block mb-10 text-neon hover:underline">← Назад</Link>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-neon bg-clip-text text-transparent"
        >
          {project.title}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800" className="rounded-2xl shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ x={100, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl mb-6">Описание</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{project.fullDesc}</p>

            <h3 className="text-2xl mt-10 mb-6">Технологии</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(t => (
                <span key={t} className="px-6 py-3 bg-neon/20 text-neon rounded-full">{t}</span>
              ))}
            </div>

            <div className="mt-12 flex gap-6">
              <a href={project.links.github} target="_blank" className="px-8 py-4 bg-neon text-black font-bold rounded-full hover:scale-105 transition">
                GitHub
              </a>
              {project.links.telegram && (
                <a href={project.links.telegram} target="_blank" className="px-8 py-4 border-2 border-neon text-neon rounded-full hover:bg-neon hover:text-black transition">
                  Запустить бота
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
