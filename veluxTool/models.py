from django.db import models

# Create your models here.
class koninklijkBesluit(models.Model):

    wetgeving=models.CharField(max_length=120)
    oppervlakteMin=models.IntegerField(default=0)
    oppervlakteMax=models.IntegerField(default=0)


    def __str__(self):
        return self.wetgeving

class BVVTwee(models.Model):

    richtlijn=models.CharField(max_length=120)
    oppervlakteMinUG=models.IntegerField(default=0)
    oppervlakteMaxUG=models.IntegerField(default=0)
    oppervlakteMinAG=models.IntegerField(default=0)
    oppervlakteMaxAG=models.IntegerField(default=0)
    diepteMin=models.IntegerField(default=0)
    diepteMax=models.IntegerField(default=0)

    def __str__(self):
        return self.richtlijn

class BVVDrie(models.Model):

    richtlijn=models.CharField(max_length=120)
    oppervlakteMinUG=models.IntegerField(default=0)
    oppervlakteMaxUG=models.IntegerField(default=0)
    oppervlakteMinAG=models.IntegerField(default=0)
    oppervlakteMaxAG=models.IntegerField(default=0)
    diepteMin=models.IntegerField(default=0)
    diepteMax=models.IntegerField(default=0)

    def __str__(self):
        return self.richtlijn