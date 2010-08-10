class ApplicationController < ActionController::Base
  protect_from_forgery

	protected
		
		def klass_required
			unless self.current_user.klasses.count > 0
				flash[:error] = t("flash.no_class")
				redirect_to klasses_path 
			end
		end
end
