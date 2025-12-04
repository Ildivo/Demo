import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const projects = [
  {
    id: 1,
    title: "Telegram-бот Avito Parser",
    desc: "Асинхронный бот на aiogram 3 + Redis + PostgreSQL. Парсит объявления каждые 30 сек",
    tags: ["Python", "aiogram", "PostgreSQL", "Docker", "Redis"],
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 2,
    title: "FastAPI + React Dashboard",
    desc: "Админка для ML-модели предсказания оттока клиентов (accuracy 94%)",
    tags: ["FastAPI", "React", "Docker", "PostgreSQL", "Scikit-learn"],
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Парсер Wildberries + аналитика",
    desc: "Собирает 10 000+ товаров в день, строит дашборд в Streamlit",
    tags: ["Selenium", "Pandas", "Streamlit", "Airflow"],
    color: "from-blue-500 to-cyan-600"
  },
]

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <torusKnotGeometry args={[10, 3, 128, 16]} />
          <meshStandardMaterial color="#00ff88" wireframe />
        </mesh>
      </Float>
    </>
  )
}

export default function App() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* 3D Фон */}
        <div className="absolute inset-0 -z-10">
          <Canvas camera={{ position: [0, 0, 30] }}>
            <Scene />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="min-h-screen flex items-center justify-center text-center px-6"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-neon bg-clip-text text-transparent">
              Твоё Имя
            </h1>
            <p className="text-2xl md:text-4xl mt-6 text-gray-300">
              Python Developer • Fullstack • Бэкенд • ML • Боты
            </p>
            <p className="mt-10 text-xl max-w-2xl mx-auto opacity-80">
              Создаю быстрые, масштабируемые и красивые решения на Python
            </p>
          </div>
        </motion.div>

        {/* Проекты */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-white to-neon bg-clip-text text-transparent"
          >
            Проекты
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <Link to={`/project/${project.id}`} key={project.id}>
                <motion.div
                  whileHover={{ y: -20, rotateY: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition`} />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl" />
                  
                  <div className="relative h-full p-10 flex flex-col justify-end">
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                    <span className="text-neon text-5xl">→</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
