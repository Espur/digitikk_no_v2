class OrdersController < ApplicationController
    
    def new
        @order = Order.new
    end
    
    def create
        @order = Order.new(order_params)
        
        if @order.save 
            fornavn = params[:orders][:fornavn]
            etternavn = params[:orders][:etternavn]
            email = params[:orders][:email]
            mobil = params[:orders][:mobil]
            tjeneste = params[:orders][:tjeneste_option]
            beskrivelse = params[:orders][:beskrivelse]
            terms = params[:orders][:terms]
            
            ContantMailer.contact_email(fornavn, etternavn, email, mobil, tjeneste, beskrivelse, terms).deliver
            
            flash[:success] = 'Takk for din henvendelse. Du vil bli kontaktet fortløpende.'
            redirect_to root_path
            
        else
            flash[:danger] = 'Oisann, her gikk det visst galt. Vennligst prøv igjen'
            redirect_to new_order_path
        end
    end
    
    private
        def order_params
           params.require(:order).permit(:fornavn, :etternavn, :email, :mobil, :tjeneste_option, :beskrivelse, :terms) 
        end
end
