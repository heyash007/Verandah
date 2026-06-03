import { useState } from 'react'
import brandImg1 from './assets/Brand Design 1.png'
import brandImg2 from './assets/Brand Design 2.png'
import brandImg3 from './assets/Brand Design 3.png'
import brandImg4 from './assets/Brand Design 4.png'

import carousel1 from './assets/Carousel1.png'
import carousel2 from './assets/Carousel2.png'
import carousel3 from './assets/Carousel3.png'
import carousel4 from './assets/Carousel4.png'
import carousel5 from './assets/Carousel5.png'
import carousel6 from './assets/Carousel6.png'

import jaipur1 from './assets/Carousel2.1.png'
import jaipur2 from './assets/Carousel2.2.png'
import jaipur3 from './assets/Carousel2.3.png'
import jaipur4 from './assets/Carousel2.4.png'
import jaipur5 from './assets/Carousel2.5.png'
import jaipur6 from './assets/Carousel2.6.png'

import salesPostImg from './assets/Sales_post.png'
import christmasPostImg from './assets/Christmas Post.png'

const slides = [
  {
    image: brandImg1,
    title: "Visual Identity for Verandah Interiors",
    content: (
      <>
        <p className="text-paragraph">
          A verandah is the threshold between outside and in. That single idea runs through the whole system: every colour is a material you'd see looking out from one, arranged as a journey from the natural world to the built interior.
        </p>
        <p className="text-paragraph">
          Linen is the canvas. Raw textile and warm daylight, the surface everything rests on.<br />
          Earth is the hero. Deep, sun-worn ground, the raw outdoors.<br />
          Foliage brings the green of the outside in.<br />
          Gold is golden-hour light, used only as a fill, never as text.<br />
          Reflection is the water and sky beyond the rail.
        </p>
        <p className="text-paragraph">
          The identity runs on two marks: the Verandah wordmark as the primary logo, the name carries recognition while the studio is still establishing itself across five cities and the interlocking VI monogram as the alternative mark for avatars, stamps, and tight spaces. The custom monogram and the Canela wordmark share the same high-contrast, flared-terminal character matched by eye, so the two marks read as one family.
        </p>
      </>
    )
  },
  {
    image: brandImg2,
    title: "Typography",
    content: (
      <>
        <p className="text-paragraph">
          The VI monogram was drawn custom, then matched with Canela which is a high-contrast serif whose flared, sharp-cut terminals echo the monogram's character, so the wordmark, the mark and the body type all read as one family. The brief asks for editorial, and this contrast is where that quality lives: refined, intentional, a clear break from the soft sans-serifs common in the category.
        </p>
        <p className="text-paragraph">
          Canela carries the brand voice. Canela Condensed sets the Verandah wordmark and display moments, its high contrast and flared, sharp-cut terminals echoing the character of the custom VI monogram so the identity reads as one family. Canela Deck handles secondary headings at smaller sizes, where its sturdier cut stays legible.<br />
          Inter is the system's digital workhorse, used for body text and all social collateral, chosen for clarity at small sizes and on screen.<br />
          EB Garamond (SIL OFL, free for commercial use) is the open-licence alternative to Canela, a lower-contrast, more classical serif that holds the editorial tone where a licensed face is not available.
        </p>
      </>
    )
  },
  {
    image: brandImg3,
    title: "Imagery & Atmosphere",
    content: (
      <>
        <p className="text-paragraph">
          The brand's visual world is warm, lived-in, and light-filled. Natural materials like wood, linen, and foliage let the palette appear as it would in a real room, with Foliage on the walls, Earth in the accent seating, and Linen in the textiles. Rooms feel inhabited, not staged; editorial, never sterile. It's the "outside-in" idea made physical.
        </p>
        <p className="text-paragraph">
          Imagery shown is AI-generated to convey direction. In production, Verandah's own project photography would replace it.
        </p>
      </>
    )
  },
  {
    image: brandImg4,
    title: "Brand Applications",
    content: (
      <>
        <p className="text-paragraph">
          The VI monogram carried across physical touchpoints: tote, tumbler, tee, notebooks, and cap. This is where the alternative mark earns its place. Small, single-colour, and reproducible, it stamps cleanly onto fabric, metal, and paper where the full wordmark would be too detailed to hold. The neutral Linen and Earth bases keep the goods feeling considered rather than promotional, with Earth and Gold doing the monogram work and a single Reflection notebook as a quiet accent. It shows the identity living in the world, not just on a screen.
        </p>
        <p className="text-paragraph">
          Mockups shown to demonstrate application. Production would refine placement and finish per item.
        </p>
      </>
    )
  }
]

const socialSlides = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6
]

const jaipurSlides = [
  jaipur1,
  jaipur2,
  jaipur3,
  jaipur4,
  jaipur5,
  jaipur6
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSocialSlide, setCurrentSocialSlide] = useState(0)
  const [currentJaipurSlide, setCurrentJaipurSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSocialSlide = () => {
    setCurrentSocialSlide((prev) => (prev === socialSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSocialSlide = () => {
    setCurrentSocialSlide((prev) => (prev === 0 ? socialSlides.length - 1 : prev - 1))
  }

  const nextJaipurSlide = () => {
    setCurrentJaipurSlide((prev) => (prev === jaipurSlides.length - 1 ? 0 : prev + 1))
  }

  const prevJaipurSlide = () => {
    setCurrentJaipurSlide((prev) => (prev === 0 ? jaipurSlides.length - 1 : prev - 1))
  }

  const activeSlide = slides[currentSlide]
  const activeSocialImage = socialSlides[currentSocialSlide]
  const activeJaipurImage = jaipurSlides[currentJaipurSlide]

  return (
    <div className="container">
      {/* First Section: Brand Design */}
      <section className="brand-section">
        <header className="header">
          <h1 className="heading">Brand Design for Verandah</h1>
        </header>
        
        <main className="content-section">
          <div className="image-column">
            <div className="image-container-wrapper">
              <div className="image-container">
                <img 
                  key={`img-${currentSlide}`}
                  src={activeSlide.image} 
                  alt={activeSlide.title} 
                  className="brand-image fade-in" 
                />
                <button 
                  className="carousel-arrow left-arrow" 
                  onClick={prevSlide} 
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="carousel-arrow right-arrow" 
                  onClick={nextSlide} 
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="carousel-controls">
                <div className="carousel-dots">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="carousel-fraction">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-container fade-in" key={`text-${currentSlide}`}>
            <span className="text-title">{activeSlide.title}</span>
            {activeSlide.content}
          </div>
        </main>
      </section>

      {/* Section Divider */}
      <hr className="section-divider" />

      {/* Second Section: Social Media Collaterals */}
      <section className="social-section">
        <header className="header">
          <h2 className="section-title">Social Media Collaterals</h2>
          <h3 className="section-subtitle">Instagram Carousel one — Gift Guide</h3>
        </header>

        <main className="content-section">
          <div className="image-column">
            <div className="image-container-wrapper">
              <div className="image-container">
                <img 
                  key={`social-img-${currentSocialSlide}`}
                  src={activeSocialImage} 
                  alt="Instagram Carousel — Gift Guide" 
                  className="brand-image fade-in" 
                />
                <button 
                  className="carousel-arrow left-arrow" 
                  onClick={prevSocialSlide} 
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="carousel-arrow right-arrow" 
                  onClick={nextSocialSlide} 
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="carousel-controls">
                <div className="carousel-dots">
                  {socialSlides.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === currentSocialSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSocialSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="carousel-fraction">
                  {currentSocialSlide + 1} / {socialSlides.length}
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-container">
            <span className="text-title">Post 01, Carousel, The Festive Gift Guide</span>
            <p className="text-paragraph">
              A curated gift guide is the most natural way to show an interior designer's eye, so the first carousel leads with Verandah's taste rather than its services. The cover sets the theme and previews the five pieces, then each following card features one object with a short, considered line on why it belongs in a well-made room. The aim is to read like an editor's selection, which reinforces the "studio that sees what others miss" positioning. Set in Inter for clean legibility in-feed, on the brand's core palette so it still reads unmistakably as Verandah.
            </p>
          </div>
        </main>

        {/* Post Divider */}
        <hr className="post-divider" />

        {/* Second Instagram Post Carousel */}
        <header className="header">
          <h3 className="section-subtitle">Instagram Carousel 2 — The Jaipur Rug</h3>
        </header>

        <main className="content-section">
          <div className="image-column">
            <div className="image-container-wrapper">
              <div className="image-container">
                <img 
                  key={`jaipur-img-${currentJaipurSlide}`}
                  src={activeJaipurImage} 
                  alt="Instagram Carousel — The Jaipur Rug" 
                  className="brand-image fade-in" 
                />
                <button 
                  className="carousel-arrow left-arrow" 
                  onClick={prevJaipurSlide} 
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="carousel-arrow right-arrow" 
                  onClick={nextJaipurSlide} 
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="carousel-controls">
                <div className="carousel-dots">
                  {jaipurSlides.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${index === currentJaipurSlide ? 'active' : ''}`}
                      onClick={() => setCurrentJaipurSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="carousel-fraction">
                  {currentJaipurSlide + 1} / {jaipurSlides.length}
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-container">
            <span className="text-title">Post 02, Carousel, The Jaipur Rug</span>
            <p className="text-paragraph">
              Where the gift guide shows taste, this carousel shows expertise. A short, editorial look at Jaipur's weaving tradition positions Verandah as a studio that understands the craft behind the pieces it places, not just the look. The cover sets the theme on the brand's Reflection blue, then each card shows the rugs styled in real homes, so the viewer sees not just the weave but how the studio would place it in a finished space. Set in Inter on the core palette for clean, in-feed legibility.
            </p>
          </div>
        </main>

        {/* Post Divider */}
        <hr className="post-divider" />

        {/* Third Instagram Post: Static Sale Post */}
        <header className="header">
          <h3 className="section-subtitle">Instagram Static Post 3 — The Sale</h3>
        </header>

        <main className="content-section">
          <div className="image-column">
            <div className="image-container-wrapper">
              <div className="image-container">
                <img 
                  src={salesPostImg} 
                  alt="Instagram Static Post — The Sample Sale" 
                  className="brand-image" 
                />
              </div>
            </div>
          </div>
          
          <div className="text-container">
            <span className="text-title">Post 03, Static, The Sample Sale</span>
            <p className="text-paragraph">
              A change of pace from the editorial posts. A sample sale gives the brand a louder, more energetic register while staying recognisably Verandah, built on the core palette with a Canela headline and a playful, slightly off-kilter layout that signals "this is the fun one" without abandoning the system. It rounds out the feed with a clear call to action, proving the identity can stretch to a promotional moment and still hold together.
            </p>
          </div>
        </main>

        {/* Post Divider */}
        <hr className="post-divider" />

        {/* Fourth Instagram Post: Static greeting post */}
        <header className="header">
          <h3 className="section-subtitle">Instagram Static Post 4 — The Greeting</h3>
        </header>

        <main className="content-section">
          <div className="image-column">
            <div className="image-container-wrapper">
              <div className="image-container">
                <img 
                  src={christmasPostImg} 
                  alt="Instagram Static Post — Festive Greeting" 
                  className="brand-image" 
                />
              </div>
            </div>
          </div>
          
          <div className="text-container">
            <span className="text-title">Post 04, Static, Festive Greeting</span>
            <p className="text-paragraph">
              A seasonal goodwill post that closes the set on a human note. Instead of selling, it extends warmth to the audience and ties the holiday back to the studio's real subject, the spaces where people gather. It reinforces Verandah as a brand that cares how a home feels, not just how it looks. The illustrated botanical treatment is a gentle, conscious step softer than the editorial posts, on the principle that a holiday greeting is the one moment a brand can loosen its collar, used sparingly so the flex shows range without diluting the identity.
            </p>
          </div>
        </main>
      </section>
    </div>
  )
}

export default App
