from django.db import models

# Create your models here.


class Item(models.Model):
    item_name = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    price = models.IntegerField(default=0)
    item_q = models.IntegerField(default=1)
    description = models.CharField(max_length=500)
    img_src = models.CharField(max_length=300)
