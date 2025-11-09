import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Искусство быть собой",
    excerpt: "Размышления о творчестве, самовыражении и поиске своего голоса в мире, где все кажется уже сказанным.",
    date: "15 октября 2024",
    category: "Творчество",
    size: "large",
    image: "https://cdn.poehali.dev/projects/a70a2076-f026-4f33-b5e1-6bdc0a652162/files/01d8e705-2773-43cc-888a-7d458e04c8fb.jpg"
  },
  {
    id: 2,
    title: "Фиолетовые сны",
    excerpt: "Когда цвет становится частью идентичности.",
    date: "8 октября 2024",
    category: "Стиль",
    size: "medium"
  },
  {
    id: 3,
    title: "Минимализм в мыслях",
    excerpt: "Как научиться отпускать лишнее и находить красоту в простоте.",
    date: "1 октября 2024",
    category: "Философия",
    size: "small"
  },
  {
    id: 4,
    title: "Путешествие внутрь",
    excerpt: "Записки о медитации, осознанности и внутреннем диалоге.",
    date: "24 сентября 2024",
    category: "Саморазвитие",
    size: "medium"
  },
  {
    id: 5,
    title: "Эстетика повседневности",
    excerpt: "Находить прекрасное в обычных вещах — особый дар.",
    date: "17 сентября 2024",
    category: "Творчество",
    size: "small"
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<'blog' | 'about'>('blog');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-cormorant font-bold text-primary">Мой Блог</h1>
          <nav className="flex gap-8">
            <button 
              onClick={() => setActiveSection('blog')}
              className={`text-lg font-inter transition-all ${activeSection === 'blog' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Статьи
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className={`text-lg font-inter transition-all ${activeSection === 'about' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Обо мне
            </button>
          </nav>
        </div>
      </header>

      {activeSection === 'blog' ? (
        <main className="container mx-auto px-6 py-16">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-cormorant font-bold text-foreground mb-6 leading-tight">
              Творческие<br/>
              <span className="text-primary">Размышления</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-inter font-light">
              Личный блог о креативности, стиле и поиске вдохновения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id}
                className={`
                  group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-scale-in
                  ${post.size === 'large' ? 'md:col-span-8 md:row-span-2' : ''}
                  ${post.size === 'medium' ? 'md:col-span-6 md:row-span-1' : ''}
                  ${post.size === 'small' ? 'md:col-span-4 md:row-span-1' : ''}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {post.image && (
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                )}
                <div className={`absolute inset-0 ${post.image ? 'bg-gradient-to-t from-background via-background/60 to-transparent' : 'bg-card'}`} />
                
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="mb-3">
                    <span className="text-xs font-inter font-semibold text-primary bg-primary/20 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className={`font-cormorant font-bold mb-3 text-foreground group-hover:text-primary transition-colors
                    ${post.size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}
                  `}>
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-inter mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground font-inter">
                    <span>{post.date}</span>
                    <Icon name="ArrowRight" size={20} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      ) : (
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/a70a2076-f026-4f33-b5e1-6bdc0a652162/files/01d8e705-2773-43cc-888a-7d458e04c8fb.jpg" 
                    alt="Обо мне" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-foreground">
                  Привет, я <span className="text-primary">Автор</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground font-inter font-light leading-relaxed">
                  <p>
                    Я создаю этот блог, чтобы делиться мыслями о творчестве, стиле и красоте в повседневной жизни.
                  </p>
                  <p>
                    Вдохновение нахожу в минимализме, ярких акцентах и необычных сочетаниях. Светло-фиолетовый — не просто цвет волос, это часть моей философии: быть собой, не бояться выделяться.
                  </p>
                  <p>
                    Здесь я пишу о том, что меня волнует: об искусстве самовыражения, поиске гармонии и смелости быть уникальным.
                  </p>
                </div>
                
                <div className="flex gap-4 pt-6">
                  <Button variant="default" size="lg" className="group">
                    Связаться
                    <Icon name="Mail" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Портфолио
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-cormorant font-semibold mb-3">Творчество</h3>
                <p className="text-muted-foreground font-inter">
                  Исследую грани искусства и самовыражения
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-cormorant font-semibold mb-3">Стиль</h3>
                <p className="text-muted-foreground font-inter">
                  Создаю уникальные образы и эстетику
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-cormorant font-semibold mb-3">Вдохновение</h3>
                <p className="text-muted-foreground font-inter">
                  Нахожу красоту в повседневном
                </p>
              </Card>
            </div>
          </div>
        </main>
      )}

      <footer className="border-t border-border mt-32">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground font-inter">© 2024 Мой Блог. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
