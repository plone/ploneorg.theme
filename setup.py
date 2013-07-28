from setuptools import setup, find_packages
import os

version = '1.0a1'

README = open("README.rst").read()
HISTORY = open(os.path.join("docs", "HISTORY.rst")).read()

setup(name='ploneorg.theme',
      version=version,
      description="plone.org 2014 Diazo Theme Package",
      long_description=README + "\n" + HISTORY,
      classifiers=[
          "Framework :: Plone",
          "Programming Language :: Python",
          "Topic :: Software Development :: Libraries :: Python Modules",
      ],
      keywords='plone ploneorg diazo theme',
      author='Plone Foundation',
      author_email='foundation@plone.org',
      url='https://github.com/plone/ploneorg.theme',
      license='GPL version 2',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['ploneorg'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'z3c.jbot',
      ],
      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
