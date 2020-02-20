class User < ApplicationRecord
  include BCrypt
  has_secure_password

  has_many :user_interests
  has_many :interests, :through => :user_interests

  has_many :reflections
  has_many :moods, :through => :reflections

  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }
end
