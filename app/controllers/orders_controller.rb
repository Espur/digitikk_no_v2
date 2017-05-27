class OrdersController < ApplicationController
    
    def new
        @order = Order.new
    end
    
    def index
        redirect_to new_order_path
    end
    
    def create
        @order = Order.new(order_params)
        
        if @order.save 
            fornavn = params[:order][:fornavn]
            etternavn = params[:order][:etternavn]
            email = params[:order][:email]
            mobil = params[:order][:mobil]
            tjeneste = params[:order][:tjeneste_option]
            beskrivelse = params[:order][:beskrivelse]
            
            OrderMailer.order_email(fornavn, etternavn, email, mobil, tjeneste, beskrivelse).deliver
            
            flash[:success] = 'Takk for din henvendelse. Du vil bli kontaktet fortløpende.'
            redirect_to root_path
            
        else
            flash[:danger] = 'Oisann, her gikk det visst galt. Vennligst prøv igjen'
            redirect_to new_order_path
        end
    end
    
    private
        def order_params
           params.require(:order).permit(:fornavn, :etternavn, :email, :mobil, :tjeneste_option, :beskrivelse) 
        end
end
