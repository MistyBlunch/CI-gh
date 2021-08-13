=begin 
Ruby program to reverse a given string.
=end

puts "Enter the String:"
# str = gets.chomp
str = "grace"
newstr = ''

for i in  1..str.length
  newstr += str[str.length - i]
end

puts "The reverse of #{str} is #{newstr}"