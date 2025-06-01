<script setup>
import LeafletMap from '~/components/LeafletMap.vue'
import InputMessage from '~/components/InputMessage.vue'
</script>

<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="text-center py-5 mb-5">
      <div class="container">
        <h1 class="display-3 mb-4 text-primary">Contact us</h1>
        <p class="lead fs-4 text-muted max-width-md mx-auto">
          Ready to begin your yoga journey? We're here to guide you every step of the way. 
          Connect with us to book your class or learn more about our transformative programs.
        </p>
      </div>
    </section>

    <!-- First Row: Visit Studio + Map -->
    <section class="contact-section py-5">
      <div class="container">
        <div class="row g-4 mb-5">
          <!-- Visit Us Card -->
          <div class="col-lg-6">
            <div class="contact-card h-100 p-4 border rounded-3 shadow-sm">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-circle me-3">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <h3 class="h4 mb-0 text-primary">Visit Our Studio</h3>
              </div>
              <p class="text-muted mb-4">
                Experience our peaceful sanctuary in the heart of Milan. Our welcoming team 
                is ready to help you find the perfect class for your practice.
              </p>
              
              <div class="contact-details">
                <div class="detail-item mb-3">
                  <strong class="text-dark">Address:</strong><br>
                  <span class="text-muted">
                    Via Ponzio, 7<br>
                    20131 Milano, Italy
                  </span>
                </div>
                
                <div class="detail-item">
                  <strong class="text-dark">Studio Hours:</strong><br>
                  <span class="text-muted">
                    Monday - Friday: 8:00 AM - 7:00 PM<br>
                    <small class="text-success">Walk-ins welcome!</small>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Map Section -->
          <div class="col-lg-6">
            <div class="map-section ">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-circle me-3">
                  <i class="fas fa-map-marked-alt"></i>
                </div>
                <h3 class="h4 mb-0 text-primary">Find Our Studio</h3>
              </div>
              <p class="text-muted mb-3">
                Located in a tranquil area of Milan, easily accessible by public transport
              </p>
              <div class="map-container rounded-3 overflow-hidden shadow h-100" style="min-height: 300px;">
                <LeafletMap />
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row: Quick Contact + Contact Form -->
        <div class="row g-4">
          <!-- Quick Contact Card -->
          <div class="col-lg-6">
            <div class="contact-card h-100 p-4 border rounded-3 shadow-sm">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-circle me-3">
                  <i class="fas fa-phone"></i>
                </div>
                <h3 class="h4 mb-0 text-primary">Quick Contact</h3>
              </div>
              <p class="text-muted mb-4">
                Prefer to connect directly? Reach out via phone or email and we'll 
                respond promptly to all your questions.
              </p>
              
              <div class="contact-details">
                <div class="detail-item mb-3">
                  <strong class="text-dark">Phone:</strong><br>
                  <a href="tel:+393334445555" class="text-decoration-none">
                    <span class="text-primary">+39 333 444 5555</span>
                  </a><br>
                  <small class="text-muted">Monday - Friday, 8:00 AM - 7:00 PM</small>
                </div>
                
                <div class="detail-item">
                  <strong class="text-dark">Email:</strong><br>
                  <a href="mailto:yogatella@mail.it" class="text-decoration-none">
                    <span class="text-primary">yogatella@mail.it</span>
                  </a><br>
                  <small class="text-muted">We typically respond within 24 hours</small>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form Section -->
          <div class="col-lg-6">
            <div class="form-section h-100">
              <div class="enhanced-form-container p-4 rounded-3 shadow-sm h-100">
                <div class="d-flex align-items-center mb-3">
                  <div class="icon-circle me-3">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <h3 class="h4 mb-0 text-primary">Send Us a Message</h3>
                </div>
                <p class="text-muted mb-4">
                  Have a specific question? Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <!-- Custom Form -->
                <div class="custom-form">
                  <div class="form-group mb-3">
                    <label class="form-label text-dark fw-semibold">Your Email</label>
                    <div class="input-wrapper">
                      <i class="fas fa-envelope input-icon"></i>
                      <input type="email" class="form-control custom-input" placeholder="your.email@example.com" required>
                    </div>
                  </div>
                  
                  <div class="form-group mb-4">
                    <label class="form-label text-dark fw-semibold">Your Message</label>
                    <div class="input-wrapper">
                      <i class="fas fa-comment input-icon textarea-icon"></i>
                      <textarea class="form-control custom-textarea" rows="4" placeholder="Tell us about your yoga goals, questions about classes, or anything else we can help you with..." required></textarea>
                    </div>
                  </div>
                  
                  <div class="form-actions d-flex gap-2">
                    <button type="submit" class="btn btn-primary custom-btn flex-grow-1">
                      <i class="fas fa-paper-plane me-2"></i>
                      Send Message
                    </button>
                    <a href="tel:+393334445555" class="btn btn-outline-success custom-btn-call">
                      <i class="fas fa-phone me-2"></i>
                      Call Now
                    </a>
                  </div>
                  
                  <div class="form-note mt-3 text-center">
                    <small class="text-muted">
                      <i class="fas fa-shield-alt me-1"></i>
                      Your information is secure and will never be shared
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ/Additional Info -->
    <section class="additional-info py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center mb-4">
            <div class="info-item">
              <div class="icon-circle mx-auto mb-3">
                <i class="fas fa-clock"></i>
              </div>
              <h4 class="h5 text-primary">Flexible Scheduling</h4>
              <p class="text-muted small">
                We offer classes throughout the day to fit your busy lifestyle
              </p>
            </div>
          </div>
          <div class="col-md-4 text-center mb-4">
            <div class="info-item">
              <div class="icon-circle mx-auto mb-3">
                <i class="fas fa-users"></i>
              </div>
              <h4 class="h5 text-primary">All Levels Welcome</h4>
              <p class="text-muted small">
                From beginners to advanced practitioners, we have something for everyone
              </p>
            </div>
          </div>
          <div class="col-md-4 text-center mb-4">
            <div class="info-item">
              <div class="icon-circle mx-auto mb-3">
                <i class="fas fa-heart"></i>
              </div>
              <h4 class="h5 text-primary">Supportive Community</h4>
              <p class="text-muted small">
                Join our welcoming community of yogis on their wellness journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.max-width-md {
  max-width: 600px;
}

.contact-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: white;
}

.contact-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
}

.icon-circle {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.detail-item {
  padding-left: 0;
}

.map-container {
  border: 2px solid #dee2e6;
}

.enhanced-form-container {
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e9ecef;
  position: relative;
  overflow: hidden;
}

.enhanced-form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #007bff, #28a745, #007bff);
  background-size: 200% 100%;
  animation: shimmer 3s ease-in-out infinite;
}

/* Custom Form Styles */
.custom-form {
  position: relative;
}

.form-group {
  position: relative;
}

.form-label {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #495057;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  font-size: 0.9rem;
  z-index: 2;
}

.textarea-icon {
  top: 16px;
  transform: none;
}

.custom-input,
.custom-textarea {
  padding-left: 40px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.custom-input:focus,
.custom-textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.15);
  outline: none;
}

.custom-input::placeholder,
.custom-textarea::placeholder {
  color: #adb5bd;
  font-style: italic;
}

.custom-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  font-size: 0.95rem;
}

.custom-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.custom-btn-call {
  min-width: 120px;
  border: 2px solid #28a745 !important;
  color: #28a745;
}

.custom-btn-call:hover {
  background-color: #28a745;
  color: white;
}

.form-note {
  background: rgba(0, 123, 255, 0.05);
  padding: 8px 12px;
  border-radius: 6px;
  border-left: 3px solid #007bff;
}

.form-actions {
  flex-wrap: wrap;
}

@media (max-width: 576px) {
  .form-actions {
    flex-direction: column;
  }
  
  .custom-btn-call {
    min-width: 100%;
  }
}

.info-item .icon-circle {
  background: linear-gradient(135deg, #28a745, #20c997);
}

@media (max-width: 768px) {
  .display-3 {
    font-size: 2.5rem;
  }
  
  .contact-card {
    margin-bottom: 1.5rem;
  }
  
  .map-container {
    height: 300px;
  }
}
</style>