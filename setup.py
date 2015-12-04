from setuptools import setup, find_packages

version = '0.1.dev0'

setup(name='ploneorg.theme',
      version=version,
      description="Diazo Theme Package for ploneorg",
      long_description="",
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
          "Framework :: Plone",
          "Programming Language :: Python",
          "Topic :: Software Development :: Libraries :: Python Modules",
          ],
      keywords='',
      author='Zest Software',
      author_email='info@zestsoftware.nl',
      url='http://zestsoftware.nl',
      license='GPL',
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
