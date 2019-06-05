"""
.. module:: project_documentation
    :platform: OS X
    :synopsis: module illustrating how to document python source code
 
.. moduleauthor:: Patrick Kennedy <patkennedy79@gmail.com>
"""
 
 
class BasicClass(object):
    """Class illustrating how to document python source code
 
    This class provides some basic methods for incrementing, decrementing,
    and clearing a number.
 
    .. note::
 
        This class does not provide any significant functionality that the
        python does not already include. It is just for illustrative purposes.
    """
    def __init__(self):
        """A simple initialization method.
 
        Args:
            None
        """
        self.current_number = 0
 
    def increment_number(self):
        """Method to increment the number.
 
        Args:
            None
        """
        self.current_number += 1
 
    def decrement_number(self):
        """Method to decrement the number.
 
        Args:
            None
        """
        self.current_number -= 1
 
    def clear_number(self):
        """Method to clear the number.
 
        Args:
            None
        """
        self.current_number = 0