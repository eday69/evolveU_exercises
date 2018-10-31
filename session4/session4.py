# Pseudo code for session 4 exercise
#
# Lecture - Objects may be better
#
# In teams create the pseudo code to create a highway report.
# There are two files(sample included) that the program will require.\
# A province file and a traffic file.The province file is: code, name, the
# traffic file is: code, highway, car count, truck count, semi count
#
# --- Put in province
# file - --
# ab, Alberta
# sk, Saskatchewan
# mn, Manitoba
#
# --- put in traffic
# file - --
# sk, 1, 50, 55, 3
# sk, 3, 3, 3, 7
# sk, 1, 5, 1, 4
# sk, 3, 3, 1, 2
# ab, 5, 1, 2, 1
# ab, 6, 7, 3, 2
# bc, 5, 100, 1, 5
# bc, 1, 200, 4, 3
# ---
# Create a report that will print the province(full name) along with the total traffic
# on the highway


# Open traffic file
# For each row in file until EOF:
#     By key (province)/ key (highway)
#         Add values of Columns 3, 4 & 5
#         store/add sum into storing object
#

# Report by Province, by highway, traffic.

