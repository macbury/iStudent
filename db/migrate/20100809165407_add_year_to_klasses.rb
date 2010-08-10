class AddYearToKlasses < ActiveRecord::Migration
  def self.up
    add_column :klasses, :year, :integer
  end

  def self.down
    remove_column :klasses, :year
  end
end
