require 'test_helper'

class MeditationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @meditation = meditations(:one)
  end

  test "should get index" do
    get meditations_url, as: :json
    assert_response :success
  end

  test "should create meditation" do
    assert_difference('Meditation.count') do
      post meditations_url, params: { meditation: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show meditation" do
    get meditation_url(@meditation), as: :json
    assert_response :success
  end

  test "should update meditation" do
    patch meditation_url(@meditation), params: { meditation: {  } }, as: :json
    assert_response 200
  end

  test "should destroy meditation" do
    assert_difference('Meditation.count', -1) do
      delete meditation_url(@meditation), as: :json
    end

    assert_response 204
  end
end
