class Contact < ActiveRecord::Base
    validates :navn, presence: true
    validates :epost, presence: true
    validates :comments, presence: true
end