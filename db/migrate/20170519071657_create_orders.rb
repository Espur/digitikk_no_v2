class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      
      t.string :fornavn
      t.string :etternavn
      t.string :email
      t.string :mobil
      t.string :tjeneste
      t.text :beskrivelse
      
      t.timestamps
    end
  end
end
