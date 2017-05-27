class OrderMailer < ActionMailer::Base
   default to: 'espen.taftoe@gmail.com'
   
   def order_email(fornavn, etternavn, email, mobil, tjeneste, beskrivelse)
       @fornavn = fornavn
       @etternavn = etternavn
       @email = email
       @mobil = mobil
       @tjeneste = tjeneste
       @beskrivelse = beskrivelse
       
       mail(from: email, subject: 'Contact form from Digitikk.no')
    end
end