module JSONHelper
  def get_json(name)
    File.read(Rails.root.join 'spec', 'services', 'json', "#{name}.json")
  end
end
