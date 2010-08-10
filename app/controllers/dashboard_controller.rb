class DashboardController < ApplicationController
	before_filter :authenticate_user!, :klass_required
end
