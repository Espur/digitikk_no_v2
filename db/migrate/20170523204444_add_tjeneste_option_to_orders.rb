class AddTjenesteOptionToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :tjeneste_option, :string
  end
end
