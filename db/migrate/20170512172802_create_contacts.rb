class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :navn
      t.string :epost
      t.text :comments
      
      t.timestamps
    end
  end
end
