import os
import logging
from django.http import HttpResponse
from django.vies.generic import View
from django.conf import settings

# Create your views here.

class FrontendAppView(View):

    index_file_path = os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')

    def get(self, request):
        try:
            with open(self.index_file_path) as f:
                return HttpResponse(f.read())

        except FileNotFoundError:
            logging.exception("Production build not found")
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead after
                running `yarn start` on the frontend/ directory
                """,
                status=501,
            )