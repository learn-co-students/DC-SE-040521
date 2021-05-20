class Patient

    attr_accessor :name, :age

    @@all_patients = []

    def initialize(name, age)
        @name = name
        @age = age

        @@all_patients << self
    end

    def self.all
        @@all_patients
    end

    def appointments
        Appointment.all.select do |appt_instance|
            # puts "what is self: #{self}" 
            appt_instance.patient_instance == self
        end
    end

    def doctors
        # calling on appointments method above
        appointments.map do |appt_instance|
            appt_instance.doctor_instance
        end
    end

end