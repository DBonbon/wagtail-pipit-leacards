from .base_serializer import BasePageSerializer
from . import CardsPage
from wagtail.rich_text import expand_db_html
from rest_framework import serializers


class CardsPageSerializer(BasePageSerializer):
    intro = serializers.SerializerMethodField()

    class Meta:
        model = CardsPage
        fields = BasePageSerializer.Meta.fields + [
                     "intro",
                     "cards",
                 ]

    def get_intro(self, page):
        return expand_db_html(page.intro)
