# Import our views
from .views import (
    GroceryItemViewSet,
    GroceryItemListViewSet,
)

# Import router & register ViewSets
from rest_framework.routers import SimpleRouter

ApplicationRouter = SimpleRouter()

ApplicationRouter.register("items", GroceryItemViewSet)
ApplicationRouter.register("lists", GroceryItemListViewSet)

# URL Patterns

urlpatterns = ApplicationRouter.urls
