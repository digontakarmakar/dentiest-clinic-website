import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
  Check
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { dentistsData } from '../../data/dentistsData';
import { Button } from '../common/Button';

export const AppointmentWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(servicesData[0].id);
  const [selectedDentist, setSelectedDentist] = useState('any');
  const [selectedDate, setSelectedDate] = useState('2026-09-08');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: '',
    hasDentalAnxiety: false,
    isNewPatient: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '11:45 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM'
  ];

  const handleNext = () => {
    if (currentStep === 4) {
      // Validate form
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert('Please fill out all required contact fields.');
        return;
      }
      // Generate booking reference
      const ref = `SML-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setIsSubmitted(true);
      setCurrentStep(5);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#12343B', '#5D9D96', '#CDBB91', '#FFFFFF']
        });
      } catch (e) {
        // Safe fallback
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const chosenServiceObj = servicesData.find((s) => s.id === selectedService) || servicesData[0];
  const chosenDentistObj = dentistsData.find((d) => d.id === selectedDentist);

  return (
    <div className="booking-wizard-card">
      {/* Steps Indicator */}
      {!isSubmitted && (
        <div className="wizard-steps-indicator">
          {[1, 2, 3, 4].map((step) => {
            const isDone = currentStep > step;
            const isCurrent = currentStep === step;
            return (
              <div
                key={step}
                className={`wizard-step-bubble ${isCurrent ? 'active' : ''} ${isDone ? 'completed' : ''}`}
              >
                {isDone ? <Check size={18} /> : step}
              </div>
            );
          })}
        </div>
      )}

      {/* Step 1: Select Service */}
      {currentStep === 1 && (
        <div>
          <div className="eyebrow-label">Step 1 of 4</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Select Treatment & Care Goal</h2>
          <p style={{ marginBottom: '24px' }}>Choose the dental service you wish to consult with our team for.</p>

          <div className="wizard-option-grid">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className={`wizard-option-card ${selectedService === svc.id ? 'selected' : ''}`}
                onClick={() => setSelectedService(svc.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal-muted)', textTransform: 'uppercase' }}>
                    {svc.category}
                  </span>
                  {selectedService === svc.id && <CheckCircle2 size={18} color="var(--teal-muted)" />}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy-deep)', marginBottom: '4px' }}>
                  {svc.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {svc.duration}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
            <Button onClick={handleNext} variant="primary" icon={<ArrowRight size={16} />}>
              Continue to Doctor Selection
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Select Specialist */}
      {currentStep === 2 && (
        <div>
          <div className="eyebrow-label">Step 2 of 4</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Choose Your Specialist</h2>
          <p style={{ marginBottom: '24px' }}>Select a preferred doctor or choose any available clinical director.</p>

          <div className="wizard-option-grid">
            <div
              className={`wizard-option-card ${selectedDentist === 'any' ? 'selected' : ''}`}
              onClick={() => setSelectedDentist('any')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <Sparkles size={20} color="var(--champagne)" />
                {selectedDentist === 'any' && <CheckCircle2 size={18} color="var(--teal-muted)" />}
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--navy-deep)', marginBottom: '4px' }}>
                First Available Specialist
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Fastest scheduling with our expert clinical team
              </div>
            </div>

            {dentistsData.map((dentist) => (
              <div
                key={dentist.id}
                className={`wizard-option-card ${selectedDentist === dentist.id ? 'selected' : ''}`}
                onClick={() => setSelectedDentist(dentist.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  {selectedDentist === dentist.id && <CheckCircle2 size={18} color="var(--teal-muted)" />}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--navy-deep)', marginBottom: '2px' }}>
                  {dentist.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--teal-muted)', fontWeight: 600 }}>
                  {dentist.role}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
            <Button onClick={handleBack} variant="secondary" icon={<ArrowLeft size={16} />}>
              Back
            </Button>
            <Button onClick={handleNext} variant="primary" icon={<ArrowRight size={16} />}>
              Continue to Date & Time
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Pick Date & Time */}
      {currentStep === 3 && (
        <div>
          <div className="eyebrow-label">Step 3 of 4</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Select Preferred Date & Time</h2>
          <p style={{ marginBottom: '24px' }}>Appointments are reserved exclusively for you with generous time allocation.</p>

          <div className="form-row" style={{ marginBottom: '24px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="appt-date">Preferred Date</label>
              <input
                id="appt-date"
                type="date"
                className="form-input"
                value={selectedDate}
                min="2026-08-30"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Clinic Location</label>
              <div
                style={{
                  padding: '14px 18px',
                  background: 'var(--bg-ivory)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--navy-deep)'
                }}
              >
                Beverly Hills Flagship Suite (450 Luxury Blvd)
              </div>
            </div>
          </div>

          <label className="form-label" style={{ marginBottom: '12px' }}>Available Time Slots</label>
          <div className="wizard-option-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '8px' }}>
            {timeSlots.map((time) => (
              <div
                key={time}
                className={`wizard-option-card ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
                style={{ textAlign: 'center', padding: '14px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontWeight: 700, color: 'var(--navy-deep)' }}>
                  <Clock size={15} color="var(--teal-muted)" /> {time}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
            <Button onClick={handleBack} variant="secondary" icon={<ArrowLeft size={16} />}>
              Back
            </Button>
            <Button onClick={handleNext} variant="primary" icon={<ArrowRight size={16} />}>
              Continue to Patient Details
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Patient Info & Anxiety Preferences */}
      {currentStep === 4 && (
        <div>
          <div className="eyebrow-label">Step 4 of 4</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Patient Details & Comfort Preferences</h2>
          <p style={{ marginBottom: '24px' }}>Let us know how we can make your visit completely tranquil.</p>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="p-name">Full Name *</label>
              <input
                id="p-name"
                type="text"
                className="form-input"
                placeholder="e.g. Victoria Harrison"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="p-phone">Phone Number *</label>
              <input
                id="p-phone"
                type="tel"
                className="form-input"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="p-email">Email Address *</label>
            <input
              id="p-email"
              type="email"
              className="form-input"
              placeholder="victoria@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="p-notes">Special Requests or Clinical Notes (Optional)</label>
            <textarea
              id="p-notes"
              className="form-textarea"
              rows={3}
              placeholder="Tell us about any specific goals, questions, or sensitivities..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          {/* Comfort-First Anxiety Checkbox */}
          <div
            style={{
              padding: '16px 20px',
              background: 'var(--teal-light)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(93, 157, 150, 0.3)',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}
          >
            <input
              type="checkbox"
              id="anxiety-check"
              style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: 'var(--teal-muted)', cursor: 'pointer' }}
              checked={formData.hasDentalAnxiety}
              onChange={(e) => setFormData({ ...formData, hasDentalAnxiety: e.target.checked })}
            />
            <label htmlFor="anxiety-check" style={{ fontSize: '0.9rem', color: 'var(--navy-deep)', cursor: 'pointer' }}>
              <strong>I experience dental anxiety or sensitivity.</strong><br />
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Please prepare acoustic noise-canceling headphones, weighted blanket, and gentle computerized numbing protocol for my arrival.
              </span>
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
            <Button onClick={handleBack} variant="secondary" icon={<ArrowLeft size={16} />}>
              Back
            </Button>
            <Button onClick={handleNext} variant="champagne" size="lg" icon={<CalendarCheck size={18} />}>
              Confirm & Request Appointment
            </Button>
          </div>
        </div>
      )}

      {/* Step 5: Confirmed Receipt */}
      {currentStep === 5 && isSubmitted && (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'var(--teal-light)',
              color: 'var(--teal-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}
          >
            <CheckCircle2 size={44} />
          </div>

          <div className="eyebrow-label">Consultation Reserved</div>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--navy-deep)', marginBottom: '12px' }}>
            We Look Forward to Welcoming You
          </h2>
          <p style={{ maxWidth: '580px', margin: '0 auto 32px' }}>
            Your appointment request has been received. Our clinical concierge will send a calendar invitation and SMS confirmation shortly.
          </p>

          {/* Luxury Receipt Card */}
          <div
            style={{
              background: 'var(--bg-ivory)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px',
              maxWidth: '540px',
              margin: '0 auto 36px',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Booking Reference</span>
              <strong style={{ fontFamily: 'var(--font-body)', color: 'var(--navy-deep)', letterSpacing: '0.05em' }}>
                {bookingRef}
              </strong>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '0.92rem' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Patient</span>
                <strong>{formData.fullName}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Treatment</span>
                <strong>{chosenServiceObj.title}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Date & Time</span>
                <strong>{selectedDate} @ {selectedTime}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>Doctor</span>
                <strong>{chosenDentistObj ? chosenDentistObj.name : 'Clinical Director'}</strong>
              </div>
            </div>

            {formData.hasDentalAnxiety && (
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', fontSize: '0.82rem', color: 'var(--teal-muted)', fontWeight: 600 }}>
                ✓ Comfort & Calming Protocol Activated
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Button to="/" variant="primary">
              Return to Homepage
            </Button>
            <Button to="/services" variant="secondary">
              Explore Treatments
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
