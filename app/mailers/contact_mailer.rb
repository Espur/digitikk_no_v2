class ContactMailer < ActionMailer::Base
   default to: 'digitikkno@gmail.com'
   
   def contact_email(navn, epost, body)
       @navn = navn
       @epost = epost
       @body = body
       
       mail(from: epost, subject: 'Kontakskjema fra Digitikk.no')
    end
end