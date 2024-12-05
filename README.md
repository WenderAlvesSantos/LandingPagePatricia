# Landing Page - Nutricionista

## 📝 Descrição
Landing page moderna desenvolvida em Angular para uma nutricionista, com foco em design responsivo e cores que representam a cultura negra. O projeto utiliza a biblioteca NG-ZORRO para componentes de UI e apresenta uma interface elegante e profissional.

## 🎨 Paleta de Cores da Cultura Negra
- `$brown-earth: #8B4513` - Marrom terra (conexão com a terra)
- `$gold: #FFD700` - Dourado (realeza e riqueza)
- `$kente-red: #CD5C5C` - Vermelho Kente (tecido tradicional)
- `$black-power: #2F2F2F` - Preto (força e poder)
- `$ochre: #CC7722` - Ocre (tons terrosos africanos)
- `$adinkra-green: #355E3B` - Verde escuro (sabedoria Adinkra)
- `$mud-cloth: #C19A6B` - Bege terroso (inspirado no Mud Cloth)
- `$calabash: #DEB887` - Bege dourado (inspirado na cabaça)

## 🚀 Tecnologias Utilizadas
- Angular 17+
- NG-ZORRO (Biblioteca de UI)
- SCSS
- TypeScript
- Angular CLI

## 📦 Estrutura do Projeto
- tree
- landing-page/
- ├── src/
- │ ├── app/
- │ │ ├── components/
- │ │ │ └── home/
- │ │ │ ├── home.component.ts # Lógica do componente principal
- │ │ │ ├── home.component.html # Template da landing page
- │ │ │ └── home.component.scss # Estilos específicos
- │ │ ├── app.component.ts # Componente raiz
- │ │ ├── app.component.html # Template raiz
- │ │ └── app.module.ts # Módulo principal com importações
- │ ├── assets/
- │ │ ├── images/
- │ │ │ ├── profile-image.jpg # Foto da nutricionista
- │ │ │ └── adinkra-symbol.svg # Símbolos decorativos
- │ │ └── icons/ # Ícones personalizados
- │ ├── styles/
- │ │ ├── variables.scss # Variáveis SCSS (cores, etc)
- │ │ └── styles.scss # Estilos globais
- │ ├── environments/
- │ │ ├── environment.ts # Configurações de desenvolvimento
- │ │ └── environment.prod.ts # Configurações de produção
- │ ├── index.html # HTML principal
- │ └── main.ts # Ponto de entrada da aplicação
- ├── angular.json # Configurações do Angular
- ├── package.json # Dependências e scripts
- ├── tsconfig.json # Configurações TypeScript
- └── README.md # Documentação

### 📁 Descrição dos Diretórios

#### `/src/app/components/home`
Contém o componente principal da landing page com:
- Layout responsivo
- Seções: Hero, História, Missão, FAQ, Contato
- Animações e interações
- Estilos personalizados

#### `/src/assets`
Recursos estáticos:
- Imagens otimizadas
- Ícones personalizados
- Símbolos da cultura africana
- Arquivos de mídia

#### `/src/styles`
Arquivos de estilo globais:
- Variáveis SCSS com cores da cultura negra
- Mixins e funções úteis
- Reset CSS e estilos base
- Temas e customizações do NG-ZORRO

#### `/src/environments`
Configurações específicas para:
- Ambiente de desenvolvimento
- Ambiente de produção
- Variáveis de ambiente

### 🔧 Arquivos Principais

#### `home.component.ts`

## 📱 Seções da Landing Page

### Header
- Logo
- Menu de navegação
- Botão de agendamento

### Hero Section
- Título principal
- Descrição profissional
- Imagem de perfil

### História
- Apresentação pessoal
- Trajetória profissional

### Missão, Diferenciais e Valores
- Cards informativos
- Ícones personalizados
- Efeitos de hover

### FAQ (Perguntas Frequentes)
- Accordion interativo
- Respostas detalhadas

### Contato
- Informações de contato
- Localização
- Redes sociais

### Footer
- Links importantes
- Redes sociais
- Copyright

## 🎯 Funcionalidades Principais
- Design responsivo
- Animações suaves
- Efeitos de hover
- Accordion para FAQ
- Integração com redes sociais
- Formulário de contato

## 📱 Responsividade
O projeto é totalmente responsivo e se adapta aos seguintes breakpoints:
- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

## 🎨 Estilos e Animações
- Gradientes personalizados
- Efeitos de glassmorphism
- Animações de entrada
- Transições suaves
- Sombras e elevações

## 🔧 Configurações Adicionais

### Configuração do NG-ZORRO

## 📈 Performance
- Lazy loading de módulos
- Otimização de imagens
- CSS minificado
- Tree shaking

## 🤝 Contribuição
1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores
- Seu Nome - [GitHub](https://github.com/seu-usuario)

## 🙏 Agradecimentos
- NG-ZORRO pela biblioteca de componentes
- Angular Team
- Comunidade open source

## 🛠️ Instalação e Configuração

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/landing-page.git
```

2. Instale as dependências:

```bash
cd landing-page
npm install
```

3. Execute o projeto:

```bash
ng serve
```

4. Acesse no navegador:
```
http://localhost:4200
```
