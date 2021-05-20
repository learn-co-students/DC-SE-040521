require "pry"

require_relative "models/doctor"
require_relative "models/patient"
require_relative "models/appointment"

# make sure the gem is installed!
# does the same as lines 3-5
# require_all "models"

# Doctors
doctor1 = Doctor.new("Dr Ken Jeong", "Comedy", "Instagram")
doctor2 = Doctor.new("Dr Who", "Time Travel", "Phone Booth")
doctor3 = Doctor.new("Dr Dre", "Beats", "LA")

# Patients
patient1 = Patient.new("Heisenburg", 44)
patient2 = Patient.new("Rose", 23)
patient3 = Patient.new("Snoop", 40)

# Appointments
appt1 = Appointment.new("5/20/21", "12:00pm", "Funny bone check", doctor1, patient1)
appt2 = Appointment.new("6/1/21", "1:00pm", "Timeeey wimmy things", doctor2, patient2)
appt3 = Appointment.new("5/25/21", "9:00am", "Fever", doctor3, patient3)
appt4 = Appointment.new("6/20/21", "4:00pm", "Laugh check", doctor1, patient3)

binding.pry