class ArticlesController < ApplicationController
    def index
        @articles = Article.all

        render json: @articles, except: [:created_at, :updated_at]
    end

    def create
        article = Article.create!(article_params)

        render json: article
    end

    def destroy
        article = Article.find(params[:id])
        article.destroy!

        render json: {}
    end

    def update
        article = Article.find(params[:id])
        # article.update(likes: article.likes + 1)
        article.update(article_params)

        render json: article
    end

    private
    def article_params
        params.permit(:title, :author, :description, :likes, :image)
    end
end
