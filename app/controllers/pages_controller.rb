class PagesController < ApplicationController
    def home
        @contact = Contact.new
    end
        
    def contact
        @contact = Contact.new(contact_params)
            
        if @contact.save
            navn = params[:contact][:navn]
            epost = params[:contact][:epost]
            body = params[:contact][:comments]
            
            ContactMailer.contact_email(navn, epost, body).deliver
            
            flash[:success] = 'Takk for din henvendelse.'
            redirect_to root_path
        else
            flash[:danger] = 'Oida, her gikk det visst galt. Prøv igjen.'
            redirect_to root_path
        end
    end
    
    private
        def contact_params
           params.require(:contact).permit(:navn, :epost, :comments) 
        end
end
