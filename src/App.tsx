import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Home, Sparkles, Clock, Wallet, Layout, Calendar, Map as MapIcon, ClipboardCheck, ArrowRight, Zap, Target } from "lucide-react";

const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`py-16 px-6 md:py-24 ${className}`}>
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ children, className = "", primary = true }: { children: ReactNode; className?: string; primary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full py-5 px-8 rounded-xl font-bold text-lg md:text-xl shadow-lg transition-colors cursor-pointer ${
      primary 
        ? "bg-green-500 hover:bg-green-600 text-white" 
        : "bg-cobalt hover:bg-cobalt/90 text-white"
    } ${className}`}
  >
    {children}
  </motion.button>
);

export default function App() {
  return (
    <div className="min-h-screen bg-deep-bg font-montserrat text-white antialiased overflow-x-hidden">
      {/* Top Branding Bar */}
      <nav className="w-full py-4 px-8 flex justify-between items-center bg-black/20 border-b border-white/10">
        <div className="font-black text-xl tracking-tighter">CASA<span className="text-capri">DESCOMPLICADA</span></div>
        <div className="hidden md:flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/60">
          <span>Oferta Exclusiva</span>
          <div className="w-px h-4 bg-white/20"></div>
          <span>Vagas Limitadas</span>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="bg-cobalt text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-capri/20 text-capri border border-capri/30 rounded-full">
            Praticidade e Economia
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-capri uppercase">30 truques caseiros</span> pra deixar sua casa limpa, organizada e cheirosa <span className="text-capri">com pouco esforço</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Soluções simples pra gordura, odores, bagunça e limpeza do dia a dia — usando o que você já tem em casa e em poucos minutos
          </p>
          <div className="max-w-md mx-auto">
            <Button className="mb-4 bg-capri hover:bg-capri/90 text-deep-bg font-extrabold uppercase tracking-widest transition-all shadow-xl shadow-capri/20">
              Clique aqui para liberar seu acesso!
            </Button>
            <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Compra 100% segura • Satisfação garantida</p>
          </div>
        </motion.div>
      </Section>

      {/* Checklist Section - What you will receive */}
      <Section className="bg-white text-slate-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-8 text-cobalt tracking-tight">O que você vai receber:</h2>
            <ul className="space-y-6">
              {[
                "Guia com 30 truques caseiros práticos",
                "Soluções rápidas pra limpeza e organização",
                "Métodos simples pra manter a casa em ordem todos os dias"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-capri/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-capri" />
                  </div>
                  <span className="text-lg font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-8 aspect-square flex items-center justify-center relative overflow-hidden bg-slate-50 rounded-[40px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cobalt/5 to-capri/5" />
            <Home className="w-32 h-32 text-cobalt/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-white rounded-lg shadow-2xl border-4 border-cobalt flex flex-col p-4 transform -rotate-3">
              <div className="w-full h-4 bg-cobalt rounded mb-4" />
              <div className="w-2/3 h-2 bg-slate-200 rounded mb-2" />
              <div className="w-full h-2 bg-slate-200 rounded mb-2" />
              <div className="w-3/4 h-2 bg-slate-200 rounded mb-8" />
              <div className="mt-auto flex justify-between items-center">
                <span className="text-[10px] font-bold text-cobalt uppercase tracking-widest">Guia da Casa</span>
                <Sparkles className="w-4 h-4 text-capri" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* For Whom Section */}
      <Section className="bg-deep-bg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Pra quem é esse guia:</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 leading-tight">
          {[
            { icon: Clock, text: "Pra quem não tem tempo pra faxina pesada" },
            { icon: Target, text: "Pra quem limpa e a casa suja rápido de novo" },
            { icon: Zap, text: "Pra quem quer praticidade no dia a dia" },
            { icon: Wallet, text: "Pra quem quer economizar com produtos" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="card-dark p-6 flex items-center gap-4 border-white/5"
            >
              <div className="w-12 h-12 bg-capri/10 rounded-full flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-capri" />
              </div>
              <span className="text-lg font-bold text-white/90">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Inside View */}
      <Section className="bg-white text-slate-800 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-cobalt mb-4 tracking-tighter">Veja como é por dentro</h2>
          <p className="text-lg text-slate-500 font-bold uppercase tracking-widest text-xs">Simples, direto e fácil de aplicar</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="aspect-[16/9] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-slate-100">
            <div className="absolute inset-0 bg-gradient-to-br from-cobalt to-capri mix-blend-multiply opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="grid grid-cols-2 gap-4 p-8 w-full">
                  <div className="h-32 bg-white/10 rounded-xl animate-pulse" />
                  <div className="h-32 bg-white/10 rounded-xl animate-pulse" />
                  <div className="h-32 bg-white/10 rounded-xl animate-pulse" />
                  <div className="h-32 bg-white/10 rounded-xl animate-pulse" />
               </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-64 bg-slate-800 rounded-[30px] border-4 border-slate-900 hidden md:flex items-center justify-center p-2 shadow-2xl">
              <div className="bg-white w-full h-full rounded-[24px] flex flex-col p-3 text-[8px] overflow-hidden">
                <div className="font-bold mb-2 text-cobalt">Trick #01</div>
                <div className="w-full h-8 bg-slate-100 rounded mb-2" />
                <div className="w-full h-2 bg-slate-50 mt-1" />
                <div className="w-full h-2 bg-slate-50 mt-1" />
                <div className="w-full h-2 bg-slate-50 mt-1" />
              </div>
          </div>
        </div>
      </Section>

      {/* Learning Goals */}
      <Section className="bg-cobalt text-white">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tight">O que você vai aprender no guia:</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            "Como limpar gordura e sujeira difícil sem esforço",
            "Como recuperar itens da casa (panela, espelho, etc.)",
            "Como manter banheiro e cozinha limpos por mais tempo",
            "Como deixar a casa cheirosa de forma simples",
            "Como organizar sem complicação",
            "Como manter tudo em ordem com poucos minutos por dia"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 glass rounded-xl">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-capri font-black text-xs shrink-0">0{i+1}</div>
              <span className="text-sm md:text-base font-bold text-white leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Bonus Section */}
      <Section className="bg-white text-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-cobalt mb-4 tracking-tighter">E você ainda recebe 4 Bônus Exclusivos</h2>
          <p className="text-capri font-black uppercase tracking-widest text-xs">Incluso somente na oferta completa</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { tag: "Bônus 1", title: "Planner Rotina Semanal", icon: Calendar },
            { tag: "Bônus 2", title: "Planner Mensal Estrutura", icon: Layout },
            { tag: "Bônus 3", title: "Mapa Mental Completo", icon: MapIcon },
            { tag: "Bônus 4", title: "Checklist Desafio", icon: ClipboardCheck }
          ].map((bonus, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-cobalt rounded-xl flex items-center justify-center mb-4 text-white">
                <bonus.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-capri uppercase tracking-widest mb-1">{bonus.tag}</span>
              <h3 className="font-bold text-xs leading-tight text-slate-800 uppercase tracking-tighter">{bonus.title}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section className="bg-deep-bg text-white pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">Escolha a melhor oferta</h2>
          <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em]">Acesso imediato após o pagamento</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Option 1 */}
          <div className="card-dark p-8 md:p-12 flex flex-col items-center border-white/5">
            <h3 className="text-xs font-black mb-6 text-center text-white/40 uppercase tracking-[0.3em]">Opção Essencial</h3>
            <div className="text-center mb-8">
              <p className="font-bold text-lg mb-6 leading-tight">Guia da Casa Descomplicada: 30 Truques Caseiros</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm font-bold uppercase">R$</span>
                <span className="text-6xl font-black">14,90</span>
              </div>
            </div>
            <div className="w-full mt-auto">
              <Button className="bg-transparent border-2 border-cobalt text-cobalt hover:bg-cobalt hover:text-white uppercase text-xs tracking-widest font-black py-4">
                Liberar Acesso
              </Button>
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white text-slate-900 rounded-[40px] p-8 md:p-12 flex flex-col items-center relative transform md:scale-110 shadow-3xl shadow-capri/20 overflow-hidden">
            <div className="absolute top-0 right-0 bg-capri text-[10px] font-black px-4 py-1 text-white tracking-widest uppercase">
              MAIS VENDIDO
            </div>
            <h3 className="text-xs font-black mb-6 text-center uppercase tracking-[0.3em] text-capri">Combo Completo</h3>
            <div className="text-center mb-8 w-full">
              <p className="font-black text-lg mb-2 leading-tight uppercase">Guia + 4 Bônus Exclusivos</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-8 tracking-widest">Tudo o que você precisa</p>
              
              <div className="flex items-baseline justify-center gap-1 mb-10">
                <span className="text-sm font-bold uppercase">R$</span>
                <span className="text-7xl font-black text-cobalt">19,90</span>
              </div>
            </div>
            <div className="w-full mt-auto">
              <Button className="bg-capri text-deep-bg hover:bg-capri/90 shadow-xl shadow-capri/30 text-xs font-black tracking-[0.1em] py-5">
                QUERO O COMBO COMPLETO!
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Simple Footer */}
      <footer className="bg-black/40 py-12 px-6 text-center text-white/30 text-[10px] font-bold uppercase tracking-widest">
        <p>© 2026 Guia da Casa Descomplicada. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
      </footer>
    </div>
  );
}

