# Generated by Django 2.1.5 on 2019-02-08 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_auto_20190131_2332'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompletedOrders',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('username', models.CharField(max_length=120)),
                ('quantity', models.IntegerField()),
                ('item', models.CharField(max_length=120)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('delivered', models.BooleanField()),
            ],
        ),
    ]