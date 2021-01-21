class ReviewsController < ApplicationController

  def index
  end

  def new
    @cocktail = Cocktail.find(params[:cocktail_id])
    @review = Review.new
  end
  
end
