class ContactMailer < ActionMailer::Base
   default to: 'espen.taftoe@gmail.com'
   
   def contact_email(navn, epost, body)
       @navn = navn
       @epost = epost
       @body = body
       
       mail(from: email, subject: 'Contact form from Digitikk.no')
    end
end