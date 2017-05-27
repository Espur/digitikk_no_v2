class Order < ActiveRecord::Base
    validates :fornavn, presence: true
    validates :etternavn, presence: true
    validates :email, presence: true
    validates :mobil, presence: true
    validates :beskrivelse, presence: true
end