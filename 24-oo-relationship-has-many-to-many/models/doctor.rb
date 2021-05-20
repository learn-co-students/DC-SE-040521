class Doctor

    attr_accessor :name, :specialty, :hospital

    @@all_doctors = []

    def initialize(name, specialty, hospital)
        @name = name
        @specialty = specialty
        @hospital = hospital

        @@all_doctors << self
    end

    def self.all
        @@all_doctors
    end

    def appointments
        Appointment.all.select do |appt_instance|
            # puts "what is self: #{self}" 
            appt_instance.doctor_instance == self
        end
    end

    def patients
        # calling on appointments method above
        appointments.map do |appt_instance|
            appt_instance.patient_instance
        end
    end

end