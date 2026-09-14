import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState("");
  const touchStartX = useRef(null);

  /*
    Add your gallery images inside:
    public/images/Fleet/

    Change these image names according to your actual files.
  */

const galleryImages = [
  {
    src: "/images/Fleet/10-Seater-urbania.jpg",
    title: "10-Seater-urbania",
    category: "Urbania",
  },
  {
    src: "/images/Fleet/13-Seater-urbania.jpg",
    title: "13-Seater-urbania",
    category: "Urbania",
  },
  {
    src: "/images/Fleet/17-Seater-Tempo-Traveller.jpg",
    title: "17-Seater-Tempo-Traveller",
    category: "Traveller",
  },
  {
    src: "/images/Fleet/17-Seater-urbania.jpg",
    title: "17-Seater-urbania",
    category: "Urbania",
  },
  {
    src: "/images/Fleet/20-Seater-Tempo-Traveller.jpg",
    title: "20-Seater-Tempo-Traveller",
    category: "Traveller",
  },
  {
    src: "/images/Fleet/32-Seater-Bus.jpg",
    title: "32-Seater-Bus",
    category: "Bus",
  },
  {
    src: "/images/Fleet/40-Seater-Bus.jpg",
    title: "40-Seater-Bus",
    category: "Bus",
  },
  {
    src: "/images/Fleet/45-Seater-AC-Bus.jpg",
    title: "45-Seater-AC-Bus",
    category: "Bus",
  },
];


  const openGallery = (index) => {
    setSelectedIndex(index);
    setDirection("");
    document.body.classList.add("gallery-modal-open");
  };

  const closeGallery = () => {
    setSelectedIndex(null);
    setDirection("");
    document.body.classList.remove("gallery-modal-open");
  };

  const nextImage = () => {
    setDirection("next");

    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setDirection("prev");

    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const selectThumbnail = (index) => {
    if (selectedIndex === index) return;

    setDirection(index > selectedIndex ? "next" : "prev");
    setSelectedIndex(index);
  };

  /*
    Keyboard Navigation
  */

  useEffect(() => {
    const handleKeyboard = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }

      if (e.key === "Escape") {
        closeGallery();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedIndex]);

  /*
    Cleanup body class
  */

  useEffect(() => {
    return () => {
      document.body.classList.remove("gallery-modal-open");
    };
  }, []);

  /*
    Mobile Touch / Swipe
  */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;

    const difference =
      touchStartX.current - touchEndX;

    if (difference > 60) {
      nextImage();
    }

    if (difference < -60) {
      prevImage();
    }

    touchStartX.current = null;
  };

  return (
    <>


    <div className="sisf-banner sis-br-radius mt-3 position-relative">
        <div className="banner-img">
          <figure>
            <img
              src="/images/page-banner.jpg"
              alt="Mauliwala Travels Urbania and Mini Bus Rental Pune"
            />
          </figure>
        </div>

        <div className="sisf-page-title sisf-m sisf-title--standard sisf-alignment--center">
          <div className="sisf-m-inner container">
            <div className="sisf-m-content sisf-content-grid">
              <h1 className="sisf-m-title text-white sis-text-anime-style-3 entry-title">
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* =================================================
          GALLERY SECTION
      ================================================== */}

      <section className="mauli-gallery-section">

        <div className="gallery-decoration gallery-decoration-one"></div>
        <div className="gallery-decoration gallery-decoration-two"></div>

        <div className="container">

          {/* =============================================
              HEADING
          ============================================== */}

          <div className="mauli-gallery-heading">

            <div className="gallery-heading-left">

              <span className="gallery-small-title">
                <i className="fas fa-images"></i>
                OUR GALLERY
              </span>

              <h2>
                Explore Our
                <span> Travel Fleet</span>
              </h2>

            </div>

            <div className="gallery-heading-right">

              <p>
                Take a closer look at Mauliwala Travels'
                Urbania, Tempo Traveller and Mini Bus fleet
                available for group travel in Pune.
              </p>

              <div className="gallery-heading-line">
                <span></span>
              </div>

            </div>

          </div>


          {/* =============================================
              IMAGE GRID
          ============================================== */}

   {/* =============================================
    GALLERY IMAGES - EQUAL SIZE
============================================= */}

<div className="row g-4 mauli-gallery-row">

  {galleryImages.map((image, index) => (

    <div
      className="col-12 col-md-4"
      key={index}
    >

      <button
        type="button"
        className="mauli-gallery-item"
        onClick={() => openGallery(index)}
        aria-label={`Open ${image.title}`}
      >

        {/* IMAGE */}
        <img
          src={image.src}
          alt={image.title}
          loading="lazy"
        />

        {/* DARK OVERLAY */}
        <div className="gallery-image-overlay"></div>

        {/* IMAGE NUMBER */}
        <span className="gallery-image-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* OPEN ICON */}
        <div className="gallery-open-icon">
          <i className="fas fa-expand-alt"></i>
        </div>

        {/* IMAGE INFO */}
        <div className="gallery-image-info">

          <span>
            {image.category}
          </span>

          <h3>
            {image.title}
          </h3>

        </div>

      </button>

    </div>

  ))}

</div>


          {/* =============================================
              GALLERY BOTTOM
          ============================================== */}

          <div className="gallery-bottom-info">

            <div className="gallery-bottom-left">

              <i className="fas fa-camera"></i>

              <div>
                <span>
                  MAULIWALA TRAVELS
                </span>

                <strong>
                  Click any photo to explore our fleet
                </strong>
              </div>

            </div>


            <button
              type="button"
              className="gallery-view-btn"
              onClick={() => openGallery(0)}
            >
              View Gallery

              <i className="fas fa-arrow-right"></i>
            </button>

          </div>

        </div>
      </section>


      {/* =================================================
          FULLSCREEN LIGHTBOX
      ================================================== */}

      {selectedIndex !== null && (

        <div
          className="mauli-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Mauliwala Travels Gallery"
          onClick={closeGallery}
        >

          {/* TOP BAR */}

          <div className="lightbox-topbar">

            <div className="lightbox-brand">

              <span className="lightbox-brand-mark">
                M
              </span>

              <div>
                <strong>
                  MAULIWALA
                </strong>

                <span>
                  TRAVELS GALLERY
                </span>
              </div>

            </div>


            <div className="lightbox-top-actions">

              <span className="lightbox-counter">

                <strong>
                  {String(selectedIndex + 1).padStart(2, "0")}
                </strong>

                <span>/</span>

                {String(galleryImages.length).padStart(2, "0")}

              </span>


              <button
                type="button"
                className="lightbox-close"
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                <i className="fas fa-times"></i>
              </button>

            </div>

          </div>


          {/* =============================================
              MAIN VIEW
          ============================================== */}

          <div
            className="lightbox-main"
            onClick={(e) => e.stopPropagation()}
          >

            {/* PREVIOUS */}

            <button
              type="button"
              className="lightbox-arrow lightbox-prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left"></i>
            </button>


            {/* IMAGE */}

            <div
              className="lightbox-image-area"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              <div
                key={selectedIndex}
                className={`lightbox-image-wrapper ${
                  direction === "next"
                    ? "slide-from-right"
                    : direction === "prev"
                    ? "slide-from-left"
                    : "gallery-first-open"
                }`}
              >

                <img
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].title}
                />

              </div>


              {/* IMAGE CAPTION */}

              <div className="lightbox-caption">

                <span>
                  {galleryImages[selectedIndex].category}
                </span>

                <h3>
                  {galleryImages[selectedIndex].title}
                </h3>

              </div>

            </div>


            {/* NEXT */}

            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

          </div>


          {/* =============================================
              THUMBNAILS
          ============================================== */}

          <div
            className="lightbox-thumbnails"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="lightbox-thumbnail-scroll">

              {galleryImages.map((image, index) => (

                <button
                  type="button"
                  key={index}
                  className={`lightbox-thumbnail ${
                    selectedIndex === index
                      ? "active"
                      : ""
                  }`}
                  onClick={() => selectThumbnail(index)}
                  aria-label={`View ${image.title}`}
                >

                  <img
                    src={image.src}
                    alt=""
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </button>

              ))}

            </div>

          </div>

        </div>

      )}
    </>
  );
};

export default Gallery;