from django.db import models

# Create your models here.
class Regular(models.Model):
    item = models.CharField(max_length=64)
    small_price = models.DecimalField(max_digits=6, decimal_places=2)
    large_price = models.DecimalField(max_digits=6, decimal_places=2)


class Sicilian(models.Model):
    item = models.CharField(max_length=120)
    small_price = models.DecimalField(max_digits=6, decimal_places=2)
    large_price = models.DecimalField(max_digits=6, decimal_places=2)

class Toppings(models.Model):
    item = models.CharField(max_length=120)

class Subs(models.Model):
    item = models.CharField(max_length=120)
    small_price = models.DecimalField(max_digits=6, decimal_places=2)
    large_price = models.DecimalField(max_digits=6, decimal_places=2)

class Pasta(models.Model):
    item = models.CharField(max_length=120)
    price = models.DecimalField(max_digits=6, decimal_places=2)

class Salads(models.Model):
    item = models.CharField(max_length=120)
    price = models.DecimalField(max_digits=6, decimal_places=2)


class Dinner_platters(models.Model):
    item = models.CharField(max_length=120)
    small_price = models.DecimalField(max_digits=6, decimal_places=2)
    large_price = models.DecimalField(max_digits=6, decimal_places=2)
 

class CompletedOrders(models.Model):
    user_id = models.IntegerField()
    username = models.CharField(max_length=120)
    quantity = models.IntegerField()
    item = models.CharField(max_length=120)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    delivered = models.BooleanField()