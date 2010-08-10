class Klass < ActiveRecord::Base
	has_many :students, :dependent => :destroy
	has_many :users, :through => :students
	
	validates :name, :school, :presence => true, :length => 3..255
	
	def year_array
		[year, year+1]
	end
end
