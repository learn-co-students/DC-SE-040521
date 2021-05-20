class Appointment

    attr_accessor :date, :time, :reason_for_visit
    attr_reader :doctor_instance, :patient_instance

    @@all_appointments = []

    def initialize(date, time, reason_for_visit, doctor_instance, patient_instance)
        @date = date
        @time = time
        @reason_for_visit = reason_for_visit
        @doctor_instance = doctor_instance
        @patient_instance = patient_instance

        @@all_appointments << self
    end

    def self.all
        @@all_appointments
    end

end