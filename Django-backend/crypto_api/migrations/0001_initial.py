# Generated by Django 3.2.5 on 2021-07-26 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cryptocurrency',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cryptocurrency', models.CharField(max_length=100)),
                ('price', models.CharField(max_length=100)),
                ('market_cap', models.CharField(max_length=100)),
                ('change', models.CharField(max_length=100)),
            ],
        ),
    ]
